const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST || 'localhost:3001',
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || 'root',
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
