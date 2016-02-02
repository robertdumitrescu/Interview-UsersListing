/**
 * Express Framework
 * Express Framework it's a micro framework used to develop and integrate
 * easily Node.Js applications
 * @module express
 * @link "https://github.com/strongloop/express/wiki" | Express Wiki
 */
var express = require('express');
/**
 * Path Node Module
 * This module contains utilities for handling and transforming file paths.
 * Almost all these methods perform only string transformations.
 * The file system is not consulted to check whether paths are valid.
 * @module path
 * @link "https://nodejs.org/api/path.html" | Path Module
 */
var path = require('path');
/**
 * Node.js middleware for serving a favicon.
 * @module serve-favicon
 * @link "https://github.com/expressjs/serve-favicon" | serve-favicon on GitHub
 */
var favicon = require('serve-favicon');
/**
 * HTTP request logger middleware for node.js
 * It helps you see real-time data in console
 * @module morgan
 * @link "https://github.com/expressjs/morgan" | morgan on GitHub
 */
var morgan = require('morgan');
/**
 * Simple session middleware for Express Framework
 * @module express-session
 * @link "https://github.com/expressjs/session" | Express Session on GitHub
 */
var session = require('express-session');

var bodyParser = require('body-parser');
/**
 * Connect Flash Module
 * The flash is a special area of the session used for storing messages.
 * Messages are written to the flash and cleared after being displayed to the user.
 * The flash is typically used in combination with redirects, ensuring that the
 * message is available to the next page that is to be rendered.
 * @module connect-flash
 * @link "https://github.com/jaredhanson/connect-flash" | Connect Flash on GitHub
 */
var flash = require('connect-flash');

// Internal pages and controllers
var adminUsers = require('./controllers/admin/usersroute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Global vars
 */

GLOBAL.baseRelativeUrl = "/demo/interview-userslisting";

/**
 *Express Sessions
 */

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

/**
 *Connect Flash
 */

app.use(flash());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});


app.use(express.static(path.join(__dirname, 'public')));


/**
 * Internal Routes (AIS)
 **/

var builtUrl = GLOBAL.baseRelativeUrl + '/admin/users';

app.use(builtUrl, adminUsers);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

app.listen(3201);
console.log("Listening on port 3201");


