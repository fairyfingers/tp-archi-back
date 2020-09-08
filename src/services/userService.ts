import { IUser } from '../abstract/abstractUser';
import { createUser, getUser } from '../lib/schemas/user';

class UserService {
  constructor() {
    console.log('UserService instantiated');
  }

  public getUser(id: string) {
    return getUser(id);
  }

  public createUser(user: IUser) {
    return createUser(user);
  }
}

export const userService = new UserService();