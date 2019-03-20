// var User = require('./src/models/user.model');
// var Session = require('./src/models/UtilsSession');
const express = require('express');
const router = express.Router();

const csrfCheck = async (req, res, next) => {
  try {
    const { csrfToken } = req.session;
    const receivedCsrfToken = req.headers['csrf-token'];
    if (!receivedCsrfToken || csrfToken !== receivedCsrfToken) {
      throw new Error('Provided CSRF-token is invalid');
    }
    next();
  } catch (err) {
    res.status(401).json({
      errors: [
        {
          title: 'Unauthorized',
          detail: 'CSRF has been attempted.',
          errorMessage: err.message,
        },
      ],
    });
  }
};

module.exports = { csrfCheck };
