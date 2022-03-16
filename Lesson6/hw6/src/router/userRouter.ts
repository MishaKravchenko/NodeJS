import { Router } from 'express';
import { userController } from '../conrtoller/userController';

const router = Router();

router.get('/', userController.getAllUser);
router.get('/:id', userController.getUserById);
router.get('/:email', userController.getUserByEmail);
router.post('/', userController.createUser);

export const userRouter = router;
