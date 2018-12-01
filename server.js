/*************/
/*** SETUP ***/
/*************/
//set up dependencies
var PORT = process.env.PORT || 8080;
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var main = express();
var server = http.createServer(main);
var routes = require('./src/controllers/serverControllers');
var realRoutes = require('./src/routes/firstsRoute');
var io  = require('socket.io').listen(server);

//set port || 8080
main.set('port', (process.env.PORT || 8080));


/**************/
/*** CONFIG ***/
/**************/
// parse application/x-www-form-urlencoded
main.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
main.use(bodyParser.json())



//Instructing server to listen for PORT
server.listen(PORT, null, function() {
    console.log("Listening on port " + PORT);
});
//defining/creating our route path for client side
main.get('/', function(req, res){ res.sendFile(__dirname + '/client.html'); });
//Route paths
main.use('/', routes); 
main.use('/', realRoutes);
