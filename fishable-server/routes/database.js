const { Pool } = require('pg');
require('dotenv').config();

const config = {
  host: 'localhost',
  port: process.env.POSTGRES_PORT
};

const connectionPool = new Pool({
  ...config,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Closing database connection pools...');
  connectionPool.end(() => {
    console.log('authPool closed');
  });

  process.exit(0);
});

module.exports = {
  connectionPool
};
