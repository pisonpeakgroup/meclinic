const express = require('express');
var router = express.Router();
var passport = require('passport');
var  FacebookTokenStrategy = require('passport-facebook-token');



module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: 'MY-FACEBOOK-CLIENT-ID',
      clientSecret: 'YOUR-FACEBOOK-CLIENT-SECRET'
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};
module.exports = router;