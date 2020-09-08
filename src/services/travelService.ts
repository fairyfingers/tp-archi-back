import { getTravels, getLinks, getAirport } from '../lib/schemas/travel';
import { ITravel } from '../abstract/abstractTravel';;

class TravelService {
  constructor() {
    console.log('TravelService instantiated');
  }

  public async getTravels() {
    const travels = await getTravels();
    let result: any[] = [];
    ;
    for (const item of travels) {
      const res = await getLinks(item.air_plane_link);

      console.log("debut", res)
      let airports: any[] = []

      for (const l of res?.link) {
        const res = await getAirport(l);

        console.log("middle", res.name)
        airports.push(res.name)

      }

      result.push(
        {
          air_plane_link: airports,
          departure_time: item.departure_time,
          arrival_time: item.arrival_time,
          price: item.price,
          stock: item.stock
        }
      );;
    }

    return result
  }
}

export const travelService = new TravelService();