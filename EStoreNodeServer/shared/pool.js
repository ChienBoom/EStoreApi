const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "MinhChien1214",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool