const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "hackreactor",
  password: "password",
  database: "sdc",
  idleTimeoutMillis: 5000,
});

pool.connect();

// pool.query("SELECT COUNT(*) FROM reviews").then((data) => {
//   console.log(data.rows[0]);
//   pool.end();
// });

module.exports.connection = pool;
