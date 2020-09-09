import { IClient } from '../abstract/abstractClient';
import { createClient, getClient } from '../lib/schemas/client';

class ClientService {
  constructor() {
    console.log('ClientService instantiated');
  }

  public async getClient(id: string) {
    return await getClient(id);
  }

  public async createClient(client: IClient) {
    return await createClient(client);
  }
}

export const clientService = new ClientService();