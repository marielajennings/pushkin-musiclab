
// Access the callback API

let amqp = require('amqplib/callback_api');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// Find out exactly what app is and what express library does
const app = require('express')();

let rpc = require('./rpc');
const printer = require('./printer');
const logger = require('./logger.js');
const CONFIG = require('./config.js');
const dbWrite = require('./dbWrite');
require('dotenv').config();

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

//App is declared outside of amqp connect. Its protocols are being declared within the amqp connection

// Setting up rabbitMQ connection.
amqp.connect(process.env.AMPQ_ADDRESS, function(err, conn) {
  if (err) {
    return logger.error(err);
  }
  app.use((req, res, next) => {
    logger.info(req.url);
    next();
  });

  //Search for files in the controllers directory using fs, then parse through and take only javascript. 
  const controllers = fs
    .readdirSync(path.resolve(__dirname, 'controllers'))
    .filter(file => path.parse(file).ext === '.js');

  // Transform each controller file name into an api route. Pass rpc, conn, and dbWrite to the object exported
  // by the actual controller js file. These two objects (route and controller) will be passed to the app to be used. 

  controllers.forEach(controllerFile => {
    const short = controllerFile.replace('.js', '');
    const route = '/api/' + short;
    const controller = require('./controllers/' + short)(rpc, conn, dbWrite);
    app.use(route, controller);
  });

  //Separate controllers for separate purposes. One is authorization, one is forums

  if (CONFIG.forum) {
    const forumController = require('./forum')(rpc, conn, dbWrite);
    app.use('/api', forumController);
  }
  if (CONFIG.auth) {
    const authController = require('./auth')(rpc, conn, dbWrite);
    app.use('/api', authController);
  }

// What is the purpose of placing these route-like constructions within the declaration of the amqp connection?

  app.get('/api/users', (req, res, next) => {
    var rpcInput = {
      method: 'allUsers'
    };
    const channelName = 'db_rpc_worker';
    return rpc(conn, channelName, rpcInput)
      .then(data => {
        res.json(data);
      })
      .catch(next);
  });
  app.get('/api/mail/health', (req, res, next) => {
    var rpcInput = {
      method: 'health'
    };
    const channelName = 'mailer';
    return rpc(conn, channelName, rpcInput)
      .then(data => {
        res.json(data);
      })
      .catch(next);
  });

  app.get('/api/routes', (req, res, next) => {
    const routes = printer(app);
    res.send(routes);
  });
  app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });
  app.use((err, req, res, next) => {
    res.status(500);
    res.json(err);
    logger.error(err.message);
  });
  app.listen(PORT, function() {
    // require('express-routemap')(app)
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Server listening on: http://localhost:%s', PORT);
  });
});

module.exports = app;
