const mysql = require('mysql');

const connection = mysql.createConnection ({
  host: 'localhost',
  database: 'burgers_db',
  user: 'root',
  password: '17Heartblue44!'
})

module.exports = connection;