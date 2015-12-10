

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. (index.ejs) */

//LOGIN-PAGE

router.get('/', function(req, res, next) {
    console.log(req.session.email);
    if(req.session.email)
    {
        res.redirect('/main');
    }
  res.render('index', { title: 'Math Challenge' });
});



router.post('/', function(req, res) {

  var User = req.body;
  var main = require('./main');

  var buttonPress = req.body.submitForm;
  switch (buttonPress)
  {
    case "Register":
      res.redirect('/register');
      break;
    case "Login":

         var authenticationVariables = {
         "username": User.email,
         "password" : User.Password
         };
        var dbAPI = require('../bin/dbAPI.js');
        dbAPI.AuthenticateUser(authenticationVariables, function (data){

            if(typeof data === 'undefined')
            {
                console.log("Invalid username or password!");
            }
            else if(User.email == data.username && User.Password == data.password)
            {
                req.session.email=data.username;
                console.log("Login success!");
                res.redirect('/main');


            }
            else
            {
                console.log("Invalid username or password!");
            }



        });
  }
});


module.exports = router;