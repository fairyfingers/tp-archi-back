import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { travelService } from '../services/travelService';

@Path('travel')
export class TravelRest {
  @Path('')
  @GET
  async getTravels() {
    return await travelService.getTravels();
  }

  // TODO get detail for one travel
  @Path(':id')
  @GET
  async getTravel(travelId: string) {
    return await travelService.getTravels();
  }

}