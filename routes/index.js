var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sess = require('../session')

/* GET home page. (index.ejs) */
router.get('/', function(req, res, next) {
  sess.session();
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
    case "main":
      res.redirect('/main');
      break;

  }

  /*if(User.email == "hej" && User.Password == "hej1")
  {

    console.log("Login success!");
    res.redirect('/main');


  }
  else
  {
    console.log("Login failed!");
    res.redirect('/');
  }*/


});


module.exports = router;