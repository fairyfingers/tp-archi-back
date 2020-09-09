import { Document } from 'mongoose';

export interface ITravel {
  air_plane_link: string,
  departure_time: Date,
  arrival_time: Date,
  price: number,
  stock: number,
  luggage_stock: number,
  luggage_price: number
}

export interface ITravelReturn extends Document {
  air_plane_link: string,
  departure_time: Date,
  arrival_time: Date,
  price: number,
  stock: number,
  luggage_stock: number,
  luggage_price: number
}

export interface IAirportLinkReturn extends Document {
  link: string[]
}

export interface IAirportReturn extends Document {
  code: String,
  name: String
}