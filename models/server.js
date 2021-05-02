const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

  }

  middlewares() {

    // CORS
    this.app.use(cors());

    // Public directory
    this.app.use(express.static('public'));

  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        message: 'GET SUCCESFULL'
      });
    });

    this.app.post('/api', (req, res) => {
      res.json({
        message: 'POST SUCCESFULL'
      })
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at port ${this.port}`);
    });
  }

}

module.exports = Server;