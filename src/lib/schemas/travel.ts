import mongoose from 'mongoose';


const AirPortSchema = new mongoose.Schema({
  code: String,
  name: String
});
const Airport = mongoose.model('Airport', AirPortSchema);

const AirplaneLinkSchema = new mongoose.Schema({
  link: [AirPortSchema]
});
const AirplaneLink = mongoose.model('AirplaneLink', AirplaneLinkSchema);

export const TravelSchema = new mongoose.Schema({
  air_plane_link: AirplaneLinkSchema,
  departure_time: Date,
  arrival_time: Date,
  price: Number,
  stock: Number
});
const Travel = mongoose.model('Travel', TravelSchema);

// TODO AirplaneLink.create()