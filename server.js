const express       = require('express');
const app           = express();
const db            = require('./dbfiles/dbConfig');
const cors          = require('cors')

const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

const bcrypt        = require('bcrypt')
const saltRounds    = 10

const jwt           = require('jsonwebtoken')

const allowedOrigins = require('./config/allowedOrigins');

require('dotenv').config(); 

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

app.use(
  session({
    key: "userId",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000
    },
  })
);

app.use(express.json());

//Connect
db.connect ((err) => {
  if (err) {
    throw err;
  }
  console.log('MySql Connecticated!');
});

app.post("/register", (req, res) => {
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
//Creating Middleware. Needs to exist ABOVE anywhere verifyJWT is being called.
const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    res.send('No token. Please give us the token!')
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send({auth: false, message: 'You did not authenticate.'})
      } else {
        req.userID = decoded.id;
        next();
      }
    })
  }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send('You are authenticated! Congrabulations!!!')
})

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false});
  }
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
            
            const id = result[0].id
            const token = jwt.sign({id}, process.env.JWT_SECRET, {
              expiresIn:  60 * 60 * 24 * 1000,
            })
            req.session.user = result;

            res.json({auth: true, token: token, result: result})
          } else {
            res.json({auth: false, message:"Incorrect password."});
          }
        });
      } else {
        res.json({auth: false, message: "User doesn't exist."});
      }
    }
  )
})

app.post('/publish', (req, res) => {
  const projectTitle = req.body.project_title;
  const userId = req.body.id_user;

  db.query(
    "INSERT INTO project (project_title, id_user) VALUES (?, ?);",
    [projectTitle, userId],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send({message: "Nice title choice!"});
      }
    }
    )
  })

// app.get('/users', (req, res) => {
//   db.query("SELECT * FROM user_info",
//     (err, result) => {
//       if (err) {
//         console.log(err)
//       } else {
//         res.send(result)
//       }
//   })
// })

app.listen('3001', () => {
  console.log('Server started on port 3001');
});