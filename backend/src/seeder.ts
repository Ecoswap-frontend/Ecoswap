import mongoose from 'mongoose';
import { User } from './models/user.model'; // Ensure this path is correct
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

const MONGO_URI = 'mongodb://127.0.0.1:27017/your_database_name';


dotenv.config();

const mongoUri = process.env.MONGO_URI as string

async function seedDatabase() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB...');

    await User.deleteMany({});
    console.log('Cleared existing users.');

    const hashedPassword = await bcrypt.hash('Password123!', 10);

    const users = Array.from({ length: 10 }).map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      
      return {
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName }).toLowerCase(),
        password: hashedPassword,
        registrationNumber: `REG-${faker.string.alphanumeric(6).toUpperCase()}`,
        // role will be randomly assigned
        role: faker.helpers.arrayElement(['buyer', 'seller']),
      };
    });

    console.log(`Successfully seeded ${users.length} fake users!`);

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.connection.close();
    process.exit();
  }
}

seedDatabase();