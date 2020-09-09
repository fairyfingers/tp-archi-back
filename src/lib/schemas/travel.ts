import mongoose from 'mongoose';
import { ITravelReturn, IAirportLinkReturn, IAirportReturn } from '../../abstract/abstractTravel';


const AirPortSchema = new mongoose.Schema({
  code: String,
  name: String
});
const Airport = mongoose.model<IAirportReturn>('Airport', AirPortSchema);

const AirplaneLinkSchema = new mongoose.Schema({
  link: [String]
});
const AirplaneLink = mongoose.model<IAirportLinkReturn>('AirplaneLink', AirplaneLinkSchema);

export const TravelSchema = new mongoose.Schema({
  air_plane_link: String,
  departure_time: Date,
  arrival_time: Date,
  price: Number,
  stock: Number,
  luggage_stock: Number,
  luggage_price: Number
});
export const Travel = mongoose.model<ITravelReturn>('Travel', TravelSchema);


export async function getTravels() {
  return await Travel.find();
}

export async function getLinks(linkId: string) {
  return await AirplaneLink.findOne({ _id: linkId });
}

export async function getAirport(airportId: string) {
  return await Airport.findOne({ _id: airportId });
}

// Airport.create({ code: 'JFK', name: 'Aeroprot de New York' });
// Airport.create({ code: 'DTW', name: 'Detroit' });
// Airport.create({ code: 'CDG', name: 'Charles de Gaulle' });

// AirplaneLink.create({ link: ['5f589eebd17d1d26644e5bde', '5f589eebd17d1d26644e5bdd', '5f589eebd17d1d26644e5bdc'] })
// AirplaneLink.create({ link: ['5f589eebd17d1d26644e5bde', '5f589eebd17d1d26644e5bdc'] })
// AirplaneLink.create({ link: ['5f589eebd17d1d26644e5bdd', '5f589eebd17d1d26644e5bdc'] })
// AirplaneLink.create({ link: ['5f589eebd17d1d26644e5bde', '5f589eebd17d1d26644e5bdd'] })
/*const cdg = Airport.findOne({ code: 'CDG' });s
const dtw = Airport.findOne({ code: 'DTW' });
AirplaneLink.create({ link: [cdg, dtw] });
AirplaneLink.create({ link: [dtw, cdg] });*/

// Travel.create({ air_plane_link: '5f589f867fd3ce0e283a864b', departure_time: new Date('2020-02-03 13:09'), arrival_time: new Date('2020-02-03 19:46'), price: 1000, stock: 80, luggage_stock: 50, luggage_price: 50 })
// Travel.create({ air_plane_link: '5f589f867fd3ce0e283a864c', departure_time: new Date('2020-02-03 13:09'), arrival_time: new Date('2020-02-03 19:46'), price: 1400, stock: 80, luggage_stock: 50, luggage_price: 50 })
// Travel.create({ air_plane_link: '5f589f867fd3ce0e283a864d', departure_time: new Date('2020-02-03 13:09'), arrival_time: new Date('2020-02-03 19:46'), price: 800, stock: 80, luggage_stock: 50, luggage_price: 50 })
// Travel.create({ air_plane_link: '5f589f867fd3ce0e283a864e', departure_time: new Date('2020-02-03 13:09'), arrival_time: new Date('2020-02-03 19:46'), price: 300, stock: 80, luggage_stock: 50, luggage_price: 50 })
