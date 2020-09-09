import { Document } from 'mongoose';

export interface ITravelers {
  firstName: string,
  lastName: string,
  amount: number,
  luggage: number
}

export interface ITravelersReturn extends Document {
  first_name: string,
  last_name: string,
  amount: number,
  luggage: number
}