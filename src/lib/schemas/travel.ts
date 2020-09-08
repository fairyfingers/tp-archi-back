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
  stock: Number
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

//Airport.create({ code: 'CDG', name: 'Charles de Gaules' });
//Airport.create({ code: 'DTW', name: 'Detroit' });
//AirplaneLink.create({ link: ['5f5760d95f787c231c58ca89', '5f5760d95f787c231c58ca8a'] })
//AirplaneLink.create({ link: ['5f5760d95f787c231c58ca8a', '5f5760d95f787c231c58ca89'] })
/*const cdg = Airport.findOne({ code: 'CDG' });
const dtw = Airport.findOne({ code: 'DTW' });
AirplaneLink.create({ link: [cdg, dtw] });
AirplaneLink.create({ link: [dtw, cdg] });*/

//Travel.create({ air_plane_link: '5f576146017f683444b9201f', departure_time: new Date('2020-02-03 13:09'), arrival_time: new Date('2020-02-03 19:46'), price: 700, stock: 81 })
