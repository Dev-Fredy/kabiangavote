const mysql = require("mysql2/promise");
const env = require("./env");

let config = env();

const db = mysql.createPool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
});

module.exports = db;
