import { ITravelers } from '../abstract/abstractTravelers';
import { createTravelers, getTravelers } from '../lib/schemas/travelers';

class TravelersService {
  constructor() {
    console.log('ClientService instantiated');
  }

  public async getTravelers(id: string) {
    return await getTravelers(id);
  }

  public async createTravelers(travelers: ITravelers) {
    return await createTravelers(travelers);
  }
}

export const travelersService = new TravelersService();