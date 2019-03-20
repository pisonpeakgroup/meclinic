/*************/
/*** SETUP ***/
/*************/
//set up dependencies
var rootpath = require('rootpath');
var PORT = process.env.PORT || 8080;
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('./src/middleware/jwt');
var  authenticate  = require('./src/middleware/authenticate');
var expressJwt = require('express-jwt');
var router = express.Router();
var errorHandler = require('./src/controllers/error-handler');
var cors = require('cors'); 
var http = require('http');
var bodyParser = require('body-parser');
var main = express();
var server = http.createServer(main);
var realRoutes = require('./src/routes/videocall');
var routes = require('./src/controllers/videocallControllers');
var User = require('./src/models/user.model');
var csrfCheck  = require('./src/middleware/csrfCheck');
var Session = require('./src/models/UtilsSession');
var initSession = require('./src/utils/utils');
var isEmail = require('./src/utils/utils');
var usersRoute = require('./src/routes/users');
var io  = require('socket.io').listen(server);

//set port || 8080
main.set('port', (process.env.PORT || 8080));


/**************/
/*** CONFIG ***/
/**************/

var passportConfig = require('./src/routes/facebookPassport');
var mongoose1 = require('./src/models/mongoose1');


// Configuring the database
mongoose.Promise = global.Promise;
// Connecting to the database
var  dbconfig = require('./src/config/db');
mongoose.connect(dbconfig.url, { useNewUrlParser: true })
   .then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
main.use(cors(corsOption));

//rest API requirements
main.use(bodyParser.urlencoded({
  extended: true
}));
main.use(bodyParser.json());


router.route('/health-check').get(function(req, res) {
  res.status(200);
  res.send('Hello World');
});

var createToken = function(auth) {
  return jwt.sign({
    id: auth.id
  }, 'my-secret',
  {
    expiresIn: 60 * 120
  });
};

var generateToken = function (req, res, next) {
  req.token = createToken(req.auth);
  next();
};

var sendToken = function (req, res) {
  res.setHeader('x-auth-token', req.token);
  res.status(200).send(req.auth);
};

router.route('/auth/facebook')
  .post(passport.authenticate('facebook-token', {session: false}), function(req, res, next) {
    if (!req.user) {
      return res.send(401, 'User Not Authenticated');
    }

    // prepare token for API
    req.auth = {
      id: req.user.id
    };

    next();
  }, generateToken, sendToken);

//token handling middleware
var authenticate = expressJwt({
  secret: 'my-secret',
  requestProperty: 'auth',
  getToken: function(req) {
    if (req.headers['x-auth-token']) {
      return req.headers['x-auth-token'];
    }
    return null;
  }
});

var getCurrentUser = function(req, res, next) {
  User.findById(req.auth.id, function(err, user) {
    if (err) {
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
};

var getOne = function (req, res) {
  var user = req.user.toObject();

  delete user['facebookProvider'];
  delete user['__v'];

  res.json(user);
};

router.route('/auth/me')
  .get(authenticate, getCurrentUser, getOne);

main.use('/api/v1', router);


// api routes
// main.use('/src', require('../src/controllers/user.controller'));

// global error handler
// main.use(errorHandler);


//Instructing server to listen for PORT
server.listen(PORT, null, function() {
    console.log("Listening on port " + PORT);
});
//defining/creating our route path for client side
main.get('/', function(req, res){ res.sendFile(__dirname + '/FrontEnd/client.html'); });

//Rooot file paths
main.use('/', routes); 
main.use('/', realRoutes);
main.use('/register', usersRoute);
main.use('/register', User);
main.use('/login', Session);
main.use('/me',authenticate);
main.use('MY-FACEBOOK-CLIENT-ID', passportConfig);
main.use('facebookProvider.id', mongoose1);
main.use('/controllers/authenticate', jwt);
main.use('ValidationError', errorHandler);


module.exports = router;