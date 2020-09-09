import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { clientService } from '../services/clientService';
import { IClient } from '../abstract/abstractClient';

@Path('client')
export class ClientRest {
  @Path('')
  @POST
  async createClient(client: IClient) {
    return await clientService.createClient(client);
  }

  @Path('get/:id')
  @GET
  async getClient(@PathParam('id') id: string) {
    console.log(':/id')
    return await clientService.getClient(id);
  }
}