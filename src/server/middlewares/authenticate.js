/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-const-assign */
/* eslint-disable import/prefer-default-export */

const jwt = require('jsonwebtoken');
const config = require('../jwtConfig');

const authenticate = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'failed to authenticate' });
      } else if (!decoded.username) {
        res.status(404).json({ error: 'No such user' });
      }
      req.currentUser = decoded.username;
      next();
    });
  } else {
    res.status(403).json({ error: 'no token provided' });
  }
};

module.exports = authenticate;
