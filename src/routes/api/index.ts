import { Router } from 'express';
const router = Router();
import userRoutes from './userRoutes';
import thoughtRoutes from './thoughtRoutes';
import friendRoutes from './friendRoutes';

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users/:userId/friends', friendRoutes);

export default router;
