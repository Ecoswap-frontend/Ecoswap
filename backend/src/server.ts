import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db';  // your DB connection file

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());                     // Allow frontend to call this API
app.use(express.json());             // Parse JSON request bodies

// Health check route - this is what the frontend calls
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Backend is healthy!',
    message: 'Server is running and ready',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Optional: simple welcome message at root URL ("/") so base URL doesn't 404
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to EcoSwap Backend API!',
    healthCheck: '/api/health',
    status: 'API is running',
    info: 'Use /api/health to test the server'
  });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();  // Your DB connection function
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Backend server running on http://localhost:${PORT}`);
      console.log(`Test endpoint: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);  // Exit if DB connection fails
  }
};

startServer();