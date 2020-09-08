import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { travelService } from '../services/travelService';

@Path('travel')
export class TravelRest {
  @Path('')
  @GET
  async getTravel() {
    return await travelService.getTravels();
  }
}