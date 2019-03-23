const express = require('express');
const router = express.Router();

// A simple Health Check route
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
  
  
  module.exports = router;  