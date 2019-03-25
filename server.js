/*************/
/*** SETUP ***/
/*************/
//set up dependencies
var PORT = process.env.PORT || 8080;
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var cors = require('cors'); 
var http = require('http');
var bodyParser = require('body-parser');
var main = express();
var server = http.createServer(main);
var User = require('./src/models/user.model');
var usersRoute = require('./src/routes/users');
var io  = require('socket.io').listen(server);


//set port || 8080
main.set('port', (process.env.PORT || 8080));


/**************/
/*** CONFIG ***/
/**************/

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



//Instructing server to listen for PORT
server.listen(PORT, null, function() {
    console.log("Listening on port " + PORT);
});


//Rooot file paths
main.use('/register', usersRoute);
main.use('/register', User);
main.use('/login', Session);
main.use('/me',authenticate);


module.exports = router;