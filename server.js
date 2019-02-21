/**
 * Created by bolorundurowb on 11/28/2018
 */
 
 const mongoose = require('mongoose');

 const config = require('./src/config/Config');

 // connect our database
mongoose.connect(config.dbUrl);
