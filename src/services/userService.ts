// import { morpionHandler } from "./morpionHandler";

class UserService {
  constructor() {
    console.log('UserService instantiated');
  }

  public createGame() {
    // return morpionHandler.createGame();
  }

  public play(gameId: number, player: string, x: number, y: number) {
    // return morpionHandler.play(gameId, player, (y * 3 + x));
  }

  public getGrid(id: number) {
    // return morpionHandler.getGrid(id);
  }
}

export const userService = new UserService();