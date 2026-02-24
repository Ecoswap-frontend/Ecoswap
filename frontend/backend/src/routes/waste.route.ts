import express, { Router } from 'express';
import { uploadWaste , updateWasteListing,deleteWasteListing } from '../controller/waste.controller';
import { upload } from '../config/cloudinary';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
import { validate } from '../middleware/user.middleware';
import { wasteSchema } from '../schema/schema';

const router: Router = express.Router();


// 'images' -> to be forwarded for the form name
router.post('/upload', authMiddleware,roleMiddleware('seller'), upload.array('images', 5),validate(wasteSchema), uploadWaste);
router.patch('/:id', authMiddleware, roleMiddleware('seller'), upload.array('images', 5), updateWasteListing);
router.delete('/:id', authMiddleware, roleMiddleware('seller'), deleteWasteListing);


export default router;