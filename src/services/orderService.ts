import { IOrder } from '../abstract/abstractOrder';
import { createOrder } from '../lib/schemas/order';

class OrderService {
  constructor() {
    console.log('OrderService instantiated');
  }

  public createOrder(order: IOrder) {
    return createOrder(order);
  }
}

export const orderService = new OrderService();