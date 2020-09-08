import { Document } from 'mongoose';

export interface IOrder {
  userId: string,
  travelId: string
}

export interface IOrderReturn extends Document {
  user: string,
  travel: string
}