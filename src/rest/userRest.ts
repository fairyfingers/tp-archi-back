import 'typescript-rest';
import { Path, POST, GET, PathParam } from 'typescript-rest';
import { userService } from '../services/userService';

@Path('user')
export class UserRest {

  @Path('test')
  @POST
  createUser() {
    console.log(':/create')
    //return userService.createUser();
  }

  @Path(':id')
  @GET
  getUser(@PathParam('id') id: number) {
    console.log('/:id')
    //return userService.getUser(id);
  }
}