const express = require('express');
const router = express.Router();



router.post('/register', async (req, res) => {
    res.status(400).json({
      errors: [
        {
          title: 'Registration Error',
          detail: 'Something went wrong during registration process.',
          errorMessage: err.message,
        },
      ],
});

router.post('/login', async (req, res) => {
    res.status(401).json({
      errors: [
        {
          title: 'Invalid Credentials',
          detail: 'Check email and password combination',
          errorMessage: err.message,
        },
      ],
});

router.get('/me',  async (req, res) => {
    res.status(401).json({
      errors: [
        {
          title: 'Unauthorized',
          detail: 'Not authorized to access this route',
          errorMessage: err.message,
        },
      ],
});

router.delete('/me', async (req, res) => {
    res.status(401).json({
      errors: [
        {
          title: 'Invalid Credentials',
          detail: 'Check email and password combination',
          errorMessage: err.message,
        },
      ],
});

router.put('/logout', async (req, res) => {
    res.status(400).json({
      errors: [
        {
          title: 'Logout Failed',
          detail: 'Something went wrong during the logout process.',
          errorMessage: err.message,
        },
      ],
});

// New codes for Retrieving users with status code
router.get('/register', async (req, res) => {
  res.status(400).json({
    errors: [
      {
        title: 'Retrieval Error',
        detail: 'Something went wrong during Retrieval process.',
        errorMessage: err.message,
      },
    ],
});

router.get('/login', async (req, res) => {
   res.status(400).json({
        errors: [
          {
            title: 'Bad Request',
            detail: 'Password must be a string',
          },
        ],
      });
    
    res.status(401).json({
      errors: [
        {
          title: 'Invalid Credentials',
          detail: 'Check email and password combination',
          errorMessage: err.message,
        },
      ],
});


router.get('/me', async (req, res) => {
    res.status(401).json({
      errors: [
        {
          title: 'Unauthorized',
          detail: 'Not authorized to access this route',
          errorMessage: err.message,
        },
      ],
    })})})});
  })})})})});
  module.exports = router;
