const express = require('express');
const router = express.Router();



router.post('/register', async (req, res) => {
  res.json('Welcome to Registration creation Page');
});

router.post('/login', async (req, res) => {
  res.json('Welcome to Login creation Page');
});

router.get('/me',  async (req, res) => {
  res.json('Welcome to Read-me Page');
});

router.delete('/me', async (req, res) => {
  res.json('Welcome to me-delete Page');
});

router.put('/logout', async (req, res) => {
  res.json('Welcome to your updated logout Page');
});

// New codes for Retrieving users with status code
router.get('/register', async (req, res) => {
  res.json('Welcome to your Readable registered information Page');
});

router.get('/login', async (req, res) => {
  res.json('Welcome to your Readable login information Page');
      });
    

router.get('/me', async (req, res) => {
  res.json('Welcome to Readable me-HOPE Page');
    });
  
  module.exports = router;
