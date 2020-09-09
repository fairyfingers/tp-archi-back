import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { travelersService } from '../services/travelersService';
import { ITravelers } from '../abstract/abstractTravelers';

@Path('travelers')
export class ClientRest {
  @Path('')
  @POST
  createTravelers(travelers: ITravelers) {
    return travelersService.createTravelers(travelers);
  }

  @Path('get/:id')
  @GET
  getTravelers(@PathParam('id') id: string) {
    console.log(':/id')
    return travelersService.getTravelers(id);
  }
}