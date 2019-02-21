/**
 * Created by bolorundurowb on 2/6/2019
 */

const dotenv = require('dotenv');

// determine what environment the code is running in
const env = process.env.NODE_ENV || 'development';
if (env !== 'production') {
    dotenv.config({ silent: true });
}
 
const config = {
    dbUrl: process.env.DB_URL
};

module.exports = config;

