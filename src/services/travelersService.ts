import { ITravelers } from '../abstract/abstractTravelers';
import { createTravelers, getTravelers } from '../lib/schemas/travelers';

class TravelersService {
  constructor() {
    console.log('ClientService instantiated');
  }

  public getTravelers(id: string) {
    return getTravelers(id);
  }

  public createTravelers(travelers: ITravelers) {
    return createTravelers(travelers);
  }
}

export const travelersService = new TravelersService();