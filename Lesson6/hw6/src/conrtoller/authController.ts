import { Request, Response } from 'express';
import {authService} from "../services/authService";

class AuthController {
    public async registration(req: Request, res: Response) {
        const data = authService.registration(req.body);
    }
}

export const authController = new AuthController();
