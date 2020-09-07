import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';

// load '.env' file
dotenv.config({
  path: '.env'
});

/**
 * Express server.
 */
class Server {
  public app = express();

  constructor() {
    this.mongoSetup();
  }

  /**
   * Connect to the database from the appropriate environment.
   */
  private mongoSetup() {
    if (!process.env.NODE_ENV || !process.env.DB_URL) {
      throw new Error('Missing either \'NODE_ENV\' or \'DB_URL\' in .env file.');
    }
    mongoose.connect(
      `${process.env.DB_URL}-${process.env.NODE_ENV}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}
const server = new Server();

// load all mongodb registered schemas
require('./lib/schemas/_loader');

// make server app handle any route
server.app.use('/', () => console.log('Hello world !'));

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Server listening on port ${port}`));
})();