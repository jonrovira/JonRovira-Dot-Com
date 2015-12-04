'use strict';



/****************
 * DEPENDENCIES *
 ****************/
var express    = require('express'),
	logger     = require('morgan'),
	bodyParser = require('body-parser'),
	favicon    = require('serve-favicon');



var app = express();



/*************
 * SETTINGS  *
 *************/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



/**********
 * ROUTER *
 **********/
var router = express.Router();

router.get('/', function (req, res) {
	res.render('index');
});



/**************
 * MIDDLEWARE *
 **************/
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'));
app.use('/', router);
app.use(favicon(__dirname + '/public/img/favicon.ico'));



/**********
 * ERRORS *
 **********/

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Production error handler (no stacktrace)
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});



module.exports = app;