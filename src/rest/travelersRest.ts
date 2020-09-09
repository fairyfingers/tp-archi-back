import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { travelersService } from '../services/travelersService';
import { ITravelers } from '../abstract/abstractTravelers';

@Path('travelers')
export class ClientRest {
  @Path('')
  @POST
  async createTravelers(travelers: ITravelers) {
    return await travelersService.createTravelers(travelers);
  }

  @Path('get/:id')
  @GET
  async getTravelers(@PathParam('id') id: string) {
    console.log(':/id')
    return await travelersService.getTravelers(id);
  }
}