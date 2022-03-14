import { Request, Response } from 'express';
import { userService } from './userService';
import {IUser} from "../entity/user";

class AuthService {
    public async registration(req: Request, res: Response) {
        const { email } = req.body;

        const userFromDB = await userService.getUserByEmail(email);
        if (userFromDB) {
            throw new Error(`User with ${email} already exists`);
        }
        const createdUser = userService.createUser(req.body);
    }

    private _getTokenData(userData: IUser) {
        const tokenPair = tokenService.
    }
}

export const authService = new AuthService();













