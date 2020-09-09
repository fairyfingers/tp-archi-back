import mongoose from 'mongoose';
import { IClient as ClientInterface } from '../../abstract/abstractClient';

export const ClientSchema = new mongoose.Schema({
  last_name: String,
  first_name: String
});
export const Client = mongoose.model('Client', ClientSchema);

export async function createClient(client: ClientInterface) {
  console.log(client);
  return await Client.create({ last_name: client.lastName, first_name: client.firstName });
}

export async function getClient(id: string) {
  return await Client.findOne({ _id: id });
}

// Client.create({ last_name: 'toto', first_name: 'tata' });

// Client.create({ last_name: 'grominet', first_name: 'titi' });

// Client.create({ last_name: 'ben', first_name: 'jerry' });