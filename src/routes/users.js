const express = require('express');
const router = express.Router();


router.use( function timeLog (req, res, next) {
  console.log('The Time is: ', Date.now())
  next()
});

router.post('/register', async (req, res) => {
  res.send('Welcome to Registration creation Page');
});

router.post('/login', async (req, res) => {
  res.send('Welcome to Login creation Page');
});

router.get('/me',  async (req, res) => {
  res.send('Welcome to Read-me Page');
});

router.delete('/me', async (req, res) => {
  res.send('Welcome to me-delete Page');
});

router.put('/logout', async (req, res) => {
  res.send('Welcome to your updated logout Page');
});

// New codes for Retrieving users with status code
router.get('/register', async (req, res, next) => {
  console.log('Welcome to your Readable registered information Page');
  next()
});

router.get('/login', async (req, res, next) => {
  console.log('Welcome to your Readable login information Page');
  next()
      });
    

router.get('/me', async (req, res, next) => {
  console.log('Welcome to Readable me-HOPE Page');
  next()
    });
  
  module.exports = router;
