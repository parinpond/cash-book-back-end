const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(cors())
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '11234',
  database: 'cash_book_db'
});
app.post('/register',jsonParser, function (req, res, next) {
  const email =req.body.email;
  const password =req.body.password;
  const name =req.body.name;
  console.log(email);
  bcrypt.hash(password, saltRounds, function(err, hash) {
    connection.execute(
      'INSERT INTO `user`(`username`, `password`, `name`) VALUES (?,?,?)',
      [email, hash,name],
      function(err, results, fields) {
        if(err){
          res.json({status:'error',message:err})
          return
        }
        res.json({status:'Ok'})
      }
    );
  });
})

app.listen(3002, function () {
  console.log('CORS-enabled web server listening on port 3002')
})