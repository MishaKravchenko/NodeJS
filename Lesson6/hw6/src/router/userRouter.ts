import { Router } from 'express';
import { userController } from '../conrtoller/userController';

const router = Router();

router.post('/', userController.createUser);

export const userRouter = router;
