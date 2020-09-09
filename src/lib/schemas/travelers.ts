import mongoose from 'mongoose';
import { ITravelers as TravelersInterface, ITravelersReturn } from '../../abstract/abstractTravelers';

export const TravelersSchema = new mongoose.Schema({
  last_name: String,
  first_name: String,
  amount: Number,
  luggage: Number
});
export const Travelers = mongoose.model<ITravelersReturn>('Travelers', TravelersSchema);

export async function createTravelers(travelers: TravelersInterface) {
  console.log(travelers);
  return Travelers.create({ last_name: travelers.lastName, first_name: travelers.firstName, amount: travelers.amount, luggage: travelers.luggage });
}

export async function getTravelers(id: string) {
  return Travelers.findOne({ _id: id });
}

// Travelers.create({ last_name: 'ben', first_name: 'jerry', amount: 1000, luggage: 0 });
// Travelers.create({ last_name: 'ben', first_name: 'james', amount: 1000, luggage: 1 });
// Travelers.create({ last_name: 'ben', first_name: 'brian', amount: 1000, luggage: 1 });