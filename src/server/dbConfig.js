/* eslint-disable no-unused-vars */
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'oglay',
  password: '12345',
  max: 10
});

// const isProduction = process.env.NODE_ENV === 'production';

// const connectionString = `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`;

// const pool = new Pool({
//   connectionString: isProduction ? process.evn.database_url : connectionString
// });

module.exports = pool;
