const express       = require('express');
const app           = express();
const db            = require('./dbfiles/dbConfig');

//Connect
db.connect ((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql Connecticated!');
});

//Create new table
app.get('/createcommentstable', (req, res) => {
  let sql = 'CREATE TABLE comments(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('comments table created');
  })
})

//Insert comment1 into new table

app.get('/addcomment1', (req, res) => {
  let post = {title: "Good comic!", body: "I liked the way the horse had his tongue hanging out."}
  let sql ='INSERT INTO comments SET ?';
  db.query(sql, post, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Comment1 added.');
  });
});

//Insert comment2 into new table

app.get('/addcomment2', (req, res) => {
  let post = {title: "Meh comic!", body: "I didn't like the way people cursed; they probably never cursed back then."}
  let sql ='INSERT INTO comments SET ?';
  db.query(sql, post, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Comment2 added.');
  });
});

//Select all comments

app.get('/getcomments', (req, res) => {
  let sql ='SELECT * FROM comments';
  db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(results);
    res.send('Comments fetched.');
  });
});

//Select individual comment.

app.get('/getcomment/:id', (req, res) => {
  let sql = `SELECT * FROM comments WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Comment fetched.');
  });
});

//Update comment.

app.get('/updatecomment/:id', (req, res) => {
  let newTitle = 'Updated Title'
  let sql = `UPDATE comments SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Comment updated.');
  });
});

//Delete comment.

app.get('/deletecomment/:id', (req, res) => {
  let sql = `DELETE FROM comments WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Comment deleted.');
  });
});

//Select all from user_info
app.get('/', (req, res) => {
  let sql = "SELECT * FROM comments"
    db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
    console.log(results);
  });
});

//Listen
app.listen('3001', () => {
  console.log('Server started on port 3001');
});