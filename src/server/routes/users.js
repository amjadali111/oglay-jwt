/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../dbConfig');

const signUp = require('../shared/validations/validateInput');

const router = express.Router();

router.post('/', async (req, res) => {
  const { errors, isValid } = signUp(req.body);
  if (isValid) {
    const { firstName, lastName, email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, 10);
    pool.query('SELECT * from users where email = $1', [email], (err, results) => {
      if (err) {
        res.json({ error: err });
      } else if (results.rows.length > 0) {
        res.json({ error: ['Email already exist. Please try different email address'] });
      } else {
        const rndId = Math.floor(Math.random() * 100) + 1;
        pool.query(`INSERT INTO users(id, first_name, last_name, email, password) 
          VALUES($1, $2, $3, $4, $5) RETURNING id, password`,
        [rndId, firstName, lastName, email, hashedPwd])
          .then(user => res.json({ user: 'Thanks for registeration' })); 
      }
    });
  }
});

module.exports = router;
