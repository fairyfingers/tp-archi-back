import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { clientService } from '../services/clientService';
import { IClient } from '../abstract/abstractClient';

@Path('client')
export class ClientRest {
  @Path('')
  @POST
  createClient(client: IClient) {
    return clientService.createClient(client);
  }

  @Path('get/:id')
  @GET
  getClient(@PathParam('id') id: string) {
    console.log(':/id')
    return clientService.getClient(id);
  }
}