
//set up
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var main = express();
var server = http.createServer(main);
var io  = require('socket.io').listen(server);
var router = express.Router();



// parse application/x-www-form-urlencoded
main.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
main.use(bodyParser.json())


module.exports = (app) =>{
//defining/creating our route path for client side
main.get('/', function(req, res){ res.sendFile(__dirname + '/client.html'); });
}
module.exports = router;