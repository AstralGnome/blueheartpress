const express       = require('express');
const app           = express();
const connection    = require('./dbfiles/dbConfig');

app.get('/', function(req,res) {
  let sql = "SELECT * FROM USER_INFO"
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
    console.log("results")
  })
  console.log('Called');
  res.send('Hellooooo');
});

app.listen(3001, function() {
  console.log('App listening on PoRtt 3000')
  connection.connect(function(err){
    if(err) throw err;
    console.log('Database Connected!')
  })
});