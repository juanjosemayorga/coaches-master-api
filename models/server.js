const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.userPath = '/api/user';
    this.authPath = '/api/auth';

    // Connect to DB
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {

    // CORS
    this.app.use(cors());

    // Reading of the body
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));

  }

  routes() {

    this.app.use(this.authPath, require('../routes/auth'));
    this.app.use(this.userPath, require('../routes/user'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at port ${this.port}`);
    });
  }

}

module.exports = Server;