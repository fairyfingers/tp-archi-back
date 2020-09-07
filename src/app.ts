import express from 'express';
import dotenv from 'dotenv';

// load '.env' file
dotenv.config({
  path: '.env'
});

/**
 * Express server.
 */
class Server {
  public app = express();
}
const server = new Server();

// make server app handle any route
server.app.use('/', () => console.log('Hello world !'));

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();