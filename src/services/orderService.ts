import { IOrder } from '../abstract/abstractOrder';
import { createOrder } from '../lib/schemas/order';

class OrderService {
  constructor() {
    console.log('OrderService instantiated');
  }

  public async createOrder(order: IOrder) {
    return await createOrder(order);
  }
}

export const orderService = new OrderService();