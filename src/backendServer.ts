import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import * as http from 'http'
import { Server } from 'typescript-rest';
import fs from 'fs';
import { ClientRest } from './rest/clientRest';
import { OrderRest } from './rest/orderRest';
import { TravelRest } from './rest/travelRest';
import { } from 'body-parser';
import cors from 'cors';

// load '.env' file
dotenv.config({
  path: '.env'
});

/**
 * Express server.
 */
class BackendServer {
  private backendServer: http.Server;
  public app = express();

  constructor() {
    const bodyParser = require('body-parser');
    this.backendServer = new http.Server();
    this.app = express();
    this.app.use(cors());
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      next();
    });
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    this.app.use(bodyParser.json());

    Server.buildServices(this.app, ...[ClientRest, OrderRest, TravelRest]);
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

  public start() {
    this.backendServer = this.app.listen(8081);
    console.log('Server listen on port: 8081...');
  }
}
export const server = new BackendServer();

// load all mongodb registered schemas
require('./lib/schemas/_loader');

/* ((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Server listening on port ${port}`));
})(); */