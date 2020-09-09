import { Document } from 'mongoose';

export interface IClient {
  firstName: string,
  lastName: string,
}

export interface IClientReturn extends Document {
  firstName: string,
  lastName: string,
}