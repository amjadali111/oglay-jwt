/* eslint-disable no-unreachable */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-else-return */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const users = require('./routes/users');
const auth = require('./routes/auth');
const notification = require('./routes/notifications');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/notifications', notification);

app.use(morgan('dev'));

// app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
