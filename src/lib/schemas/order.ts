import mongoose from 'mongoose';
import { TravelSchema } from './travel';
import { UserSchema } from './user';

const OrderSchema = new mongoose.Schema({
  user: UserSchema,
  travel: TravelSchema
});
const Order = mongoose.model('Order', OrderSchema);
