import { EntityRepository, getManager, Repository } from 'typeorm';
import { IUser, User } from '../../entity/user';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }
}

export const userRepository = new UserRepository();
