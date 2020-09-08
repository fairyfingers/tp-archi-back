import { Document } from 'mongoose';

export interface IUser {
  firstName: string,
  lastName: string
}

export interface IUserReturn extends Document {
  firstName: string,
  lastName: string
}