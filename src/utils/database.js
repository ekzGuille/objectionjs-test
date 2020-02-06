const Knex = require('knex');

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const knex = Knex({
  client: 'mysql',
  connection: dbConfig,
});

module.exports = {
  knex,
};
