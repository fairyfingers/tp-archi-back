import mongoose from 'mongoose';
import { TravelSchema, Travel } from './travel';
import { UserSchema, User } from './user';
import { IOrder, IOrderReturn } from '../../abstract/abstractOrder';

const OrderSchema = new mongoose.Schema({
  user: String,
  travel: String
});
const Order = mongoose.model<IOrderReturn>('Order', OrderSchema);


export async function createOrder(order: IOrder) {
  console.log(order);
  return Order.create({
    user: order.userId,
    travel: order.travelId
  })
}

/* const user = User.findOne({ first_name: 'tata' });
const travel = Travel.findOne({ price: 700 });
Order.create({ user: user, travel: travel }); */