import mongoose from 'mongoose';
import { IUser as UserInterface } from '../../abstract/abstractUser';

export const UserSchema = new mongoose.Schema({
  last_name: String,
  first_name: String
});
export const User = mongoose.model('User', UserSchema);

export async function createUser(user: UserInterface) {
  console.log(user);
  return User.create({ last_name: user.lastName, first_name: user.firstName });
}

export async function getUser(id: string) {
  return User.findOne({ _id: id });
}