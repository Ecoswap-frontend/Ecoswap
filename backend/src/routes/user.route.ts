import express, { Router } from 'express';
import { validate } from '../middleware/user.middleware';
import { registrationSchema,loginSchema } from '../schema/schema';
import { registerUsers , authenticateUser } from '../controller/user.controller';
import { type Request, type Response,type NextFunction } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';


const router: Router = express.Router();

// public routes

router.post('/register', validate(registrationSchema),registerUsers);
router.post('/login',validate(loginSchema),authenticateUser);


// protected routes
router.get('/buyer', [authMiddleware,roleMiddleware('buyer') ],(req:Request, res:Response) => {
  res.status(200).json({ message: 'Welcome to the buyer dashboard', user: req.user });
});

router.get('/seller', [authMiddleware, roleMiddleware('seller')], (req:Request, res:Response) => {
  res.status(200).json({ message: 'Welcome to the seller dashboard', user: req.user });
});


export default router; 
