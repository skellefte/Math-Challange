var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




///////ROUTE//////////
var routes = require('./routes/index');
var users = require('./routes/users');
var main = require('./routes/main');
var search = require('./routes/search');
var game = require('./routes/game');
var changePass = require('./routes/changePass');
var register = require('./routes/register');
var results = require('./routes/results');
///////ROUTE//////////

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


///////ROUTE//////////
app.use('/', routes);
app.use('/users', users);
app.use('/main', main);
app.use('/search', search);
app.use('/game', game);
app.use('/changePass', changePass);
app.use('/register', register);
app.use('/results', results);
///////ROUTE//////////

///////SESSIONS////////


///////SESSIONS////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


/*app.get('/index', function (req, res) {
  res.render({
    scripts: ['/bin/valiadate.js']
  });
});*/


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
