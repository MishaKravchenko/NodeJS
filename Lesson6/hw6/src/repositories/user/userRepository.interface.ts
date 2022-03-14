import { IUser } from '../../entity/user';

export interface IUserRepositoryInterface {
    getAllUsers(): Promise<IUser | undefined>;
    getUserById(id: string): Promise<IUser | undefined>;
    getUserByEmail(email: string): Promise<IUser | undefined>;
    createUser(user: IUser): Promise<IUser>;
}
