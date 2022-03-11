const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection ({
  host: 'localhost',
  database: 'blue_heart',
  user: 'root',
  password: process.env.MYSQL_PASSWORD
})

module.exports = connection;