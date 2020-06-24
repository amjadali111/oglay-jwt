const bookshelf = require('bookshelf');
const knex = require('knex');
const knexConfig = require('../knexfile');

export default bookshelf(knex(knexConfig.development));
