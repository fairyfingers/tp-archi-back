import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { orderService } from '../services/orderService';
import { IOrder } from '../abstract/abstractOrder';

@Path('order')
export class OrderRest {

  @Path('')
  @POST
  createOrder(order: IOrder) {
    return orderService.createOrder(order);
  }
}