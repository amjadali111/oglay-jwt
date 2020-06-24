const express = require('express');

const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', authenticate, (req, res) => {
  res.status(201).json({ user: req.currentUser });
});

module.exports = router;
