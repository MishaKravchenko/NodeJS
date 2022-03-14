import { Request, Response } from 'express';
import { IUser } from '../entity/user';
import { userService } from '../services/userService';

class UserController {
    public async getAllUser(req: Request, res: Response): Promise<Response<IUser>> {
        const users = await userService.getAllUsers();
        return res.json(users);
    }

    public async getUserById(req: Request, res: Response): Promise<Response<IUser>> {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        return res.json(user);
    }

    public async getUserByEmail(req: Request, res: Response): Promise<Response<IUser>> {
        const { email } = req.params;
        const user = await userService.getUserById(email);
        return res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        const users = await userService.createUser(req.body);
        return res.json(users);
    }
}

export const userController = new UserController();
