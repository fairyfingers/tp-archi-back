import { Document } from 'mongoose';
import { ITravelers } from "./abstractTravelers"
export interface IOrder {
  clientId: string,
  travelId: string,
  travelers: ITravelers[],
  amount: number
}

export interface IOrderReturn extends Document {
  client: string,
  travel: string,
  travelers: string[],
  amount: number
}