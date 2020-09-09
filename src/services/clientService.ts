import { IClient } from '../abstract/abstractClient';
import { createClient, getClient } from '../lib/schemas/client';

class ClientService {
  constructor() {
    console.log('ClientService instantiated');
  }

  public getClient(id: string) {
    return getClient(id);
  }

  public createClient(client: IClient) {
    return createClient(client);
  }
}

export const clientService = new ClientService();