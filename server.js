/**
 * Created by bolorundurowb on 11/28/2018
 */

const mongoose = require('mongoose');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/config/Config');
const routes = require('./src/routes/Routes');

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

// connect our database
mongoose.connect(config.dbUrl);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes.route(router));

app.listen(port, function () {
    console.log(`Server started on ${port}`);
});
