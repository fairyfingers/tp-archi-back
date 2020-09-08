import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { userService } from '../services/userService';
import { IUser } from '../abstract/abstractUser';

@Path('user')
export class UserRest {
  @Path('')
  @POST
  createUser(user: IUser) {
    return userService.createUser(user);
  }

  @Path('get/:id')
  @GET
  getUser(@PathParam('id') id: string) {
    console.log(':/id')
    return userService.getUser(id);
  }
}