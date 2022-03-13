const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'blue_heart',
})

module.exports = connection;