import { getTravels, getLinks, getAirport } from '../lib/schemas/travel';
import { ITravel } from '../abstract/abstractTravel';
import { getNbTravelOrder, getNbLuggageStockFromOrder } from '../lib/schemas/order';

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

      if (res?.link.length > 2) {
        item.price = item.price * 0.90
      }

      item.stock = item.stock - await getNbTravelOrder(item._id)
      item.luggage_stock = item.luggage_stock - await getNbLuggageStockFromOrder(item._id)

      result.push(
        {
          air_plane_link: airports,
          departure_time: item.departure_time,
          arrival_time: item.arrival_time,
          price: item.price,
          stock: item.stock,
          luggage_stock: item.luggage_stock,
          luggage_price: item.luggage_price
        }
      );;
    }

    return result
  }
}

export const travelService = new TravelService();