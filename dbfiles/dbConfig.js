const mysql = require('mysql');

const connection = mysql.createConnection ({
  host: 'localhost',
  database: 'blue_heart',
  user: 'root',
  password: '17Heartblue44!'
})

module.exports = connection;