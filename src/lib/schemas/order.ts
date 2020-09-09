import mongoose from 'mongoose';
import { TravelSchema, Travel } from './travel';
import { ClientSchema, Client } from './client';
import { IOrder, IOrderReturn } from '../../abstract/abstractOrder';
import { createTravelers, getTravelers } from "./travelers";

const OrderSchema = new mongoose.Schema({
  client: String,
  travel: String,
  travelers: [String],
  amount: Number
});
const Order = mongoose.model<IOrderReturn>('Order', OrderSchema);


export async function createOrder(order: IOrder) {
  let travelersId = []

  for (const passenger of order.travelers) {
    travelersId.push(await createTravelers(passenger))
  }

  console.log(order, travelersId);

  return Order.create({
    client: order.clientId,
    travel: order.travelId,
    travelers: travelersId,
    amount: order.amount
  })
}

export async function getNbTravelOrder(travelId: string) {
  return Order.count({ travel: travelId })
}

export async function getNbLuggageStockFromOrder(travelId: string) {
  const allOrder = await Order.find({ travel: travelId })

  let luggageUse = 0

  for (let i = 0; i < allOrder.length; i++) {
    const currentOrder = allOrder[i];

    for (let j = 0; j < currentOrder.travelers.length; j++) {
      const currentPassengerId = currentOrder.travelers[j]

      const passenger = await getTravelers(currentPassengerId)

      luggageUse += passenger.luggage
    }
  }

  return luggageUse
}

// const client = Client.findOne({ first_name: 'tata' });
// const travel = Travel.findOne({ price: 700 });
//Order.create({ client: '5f589e7966dc653598ebb3a5', travel: '5f58a06d60c78a2a20e44418', travelers: ['5f58a27272d0d617fc9860dc', '5f58a27272d0d617fc9860dd', '5f58a27272d0d617fc9860de'], amount: 3100 }); 