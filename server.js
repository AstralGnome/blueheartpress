const express       = require('express'),
      dbOperation   = require('./dbfiles/dbOperation'),
      cors          = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();


// app.use(cors());

// app.get('/api', function(req,res) {
//   console.log('Called');
//   res.send({result:'Hellooooo'})
// })

// app.get('/quit', function(req,res) {
//   console.log('Called quit');
//   res.send({result:'Goodbye'})
// })

dbOperation.getEmployees().then(res => {
  console.log(res)
})


// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));