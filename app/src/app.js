
var express = require('express');
var path = require('path');
global.__src_root = path.join(__dirname,'.');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var helper = require('./modules/helper');
var provider = helper.requireModule('provider');
var stylehelper = helper.requireModule('stylehelper');
var app = express();

global.__app_root = path.join(__dirname,'..');

// view engine setup
//app.set('views', path.join(__app_root, 'views'));
//app.set('view engine', 'jade');
//app.set('views', path.join(__app_root, 'views'));
//app.set('view engine', 'ejs');
app.use(express.static('views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__app_root, 'public')));

provider(app);

app.use(stylehelper.handler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

app.use(stylehelper.errorHandler);

// error handlers

// development error handler
// will print stacktrace
/*
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;
