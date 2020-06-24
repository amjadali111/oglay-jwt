/* eslint-disable no-unused-vars */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../dbConfig');
const jwtConfig = require('../jwtConfig');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  pool.query('SELECT * FROM users WHERE email=$1', [username])
    .then((results) => {
      const user = results.rows[0];
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          const token = jwt.sign({
            id: user.id,
            username: user.email
          }, jwtConfig.jwtSecret);
          res.json({ token });
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      }
    });
});

module.exports = router;
