const { Pool } = require('pg');

const p = new Pool();

module.exports = {
  query: (text, param) => p.query(text, param),
};
