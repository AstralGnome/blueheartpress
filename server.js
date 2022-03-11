const express       = require('express');
const app           = express();
const db            = require('./dbfiles/dbConfig');

db.connect ((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql Connecticated!')
})

app.get('/', (req,res) => {
  let sql = "SELECT * FROM user_info"
   db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
    console.log(results);
  })
});

app.listen('3001', () => {
  console.log('Server started on port 3001')
})




// app.get('/', function(req,res) {
//   let sql = "SELECT * FROM user_info"
  
//   connection.query(sql, function(err, results) {
//     if (err) throw err;
//     res.send(results);
//     console.log(results);
//   })
//   console.log('Called');
//   res.send('Hellooooo');
// });

// app.listen(3001, function() {
//   console.log('App listening on PoRtt 3000')
//   connection.connect(function(err){
//     if(err) throw err;
//     console.log('Database Connecticated!')
//   })
// });