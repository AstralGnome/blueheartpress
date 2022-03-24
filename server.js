const express       = require('express');
const app           = express();
const db            = require('./dbfiles/dbConfig');
const cors          = require('cors')

const bcrypt        = require('bcrypt')
const saltRounds    = 10

app.use(cors());
app.use(express.json());

//Connect
db.connect ((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql Connecticated!');
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {

    if (err) {
      console.log(err)
    }

    db.query(
      "INSERT INTO user_info (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        if (err) {
        console.log(err);
        } else {
        res.send('values inserted')
        }
      }
    )
  })
  })

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user_info WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
      res.send({err: err});
      } 
      
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            res.send(result)
          } else {
            res.send({message:"Incorrect password."});
          }
        });
      } else {
        res.send({message: "User doesn't exist."});
      }
    }
  )
})

app.get('/users', (req, res) => {
  db.query("SELECT * FROM user_info",
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
  })
})

app.listen('3001', () => {
  console.log('Server started on port 3001');
});

// //Create new table
// app.get('/createcommentstable', (req, res) => {
//   let sql = 'CREATE TABLE comments(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//   db.query(sql, (err, results) => {
//     if(err) throw err;
//     console.log(results);
//     res.send('comments table created');
//   })
// })

// //Insert comment1 into new table

// app.get('/addcomment1', (req, res) => {
//   let post = {title: "Good comic!", body: "I liked the way the horse had his tongue hanging out."}
//   let sql ='INSERT INTO comments SET ?';
//   db.query(sql, post, (err, results) => {
//     if(err) throw err;
//     console.log(results);
//     res.send('Comment1 added.');
//   });
// });

// //Insert comment2 into new table

// app.get('/addcomment2', (req, res) => {
//   let post = {title: "Meh comic!", body: "I didn't like the way people cursed; they probably never cursed back then."}
//   let sql ='INSERT INTO comments SET ?';
//   db.query(sql, post, (err, results) => {
//     if(err) throw err;
//     console.log(results);
//     res.send('Comment2 added.');
//   });
// });

// //Select all comments

// app.get('/getcomments', (req, res) => {
//   let sql ='SELECT * FROM comments';
//   db.query(sql, (err, results) => {
//     if(err) throw err;
//     console.log(results);
//     res.send('Comments fetched.');
//   });
// });

// //Select individual comment.

// app.get('/getcomment/:id', (req, res) => {
//   let sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Comment fetched.');
//   });
// });

// //Update comment.

// app.get('/updatecomment/:id', (req, res) => {
//   let newTitle = 'Updated Title'
//   let sql = `UPDATE comments SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Comment updated.');
//   });
// });

// //Delete comment.

// app.get('/deletecomment/:id', (req, res) => {
//   let sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
//   db.query(sql, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     res.send('Comment deleted.');
//   });
// });

// //Select all from user_info
// app.get('/', (req, res) => {
//   let sql = "SELECT * FROM comments"
//     db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//     console.log(results);
//   });
// });

//Listen