
//set up
var express = require('express');
var bodyParser = require('body-parser');
var main = express();
var router = express.Router();



// parse application/x-www-form-urlencoded
main.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
main.use(bodyParser.json())


module.exports = (app) =>{
//defining/creating our route path for client side
main.get('/', function(req, res){ res.sendFile(__dirname + '/FrontEnd/client.html'); });
}
module.exports = router;