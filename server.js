(function(){
	'use strict';

	var express 					= require('express');
	var path							= require('path');
	var jade							= require('jade');
	var flash							= require('connect-flash');
	var mongoose					= require('mongoose');
	var passport					= require('passport');
	var skipper						= require('skipper');
	var app								= express();

	/* Jade Setup */
	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');

	mongoose.connect('mongodb://localhost/ninja');

	app.use(skipper());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	require('./app/config/passport')(passport);
	require('./app/routes/index')(app);

	app.get('/', function (req, res) {
		res.render('signIn');
	});

	app.listen(process.env.PORT, function () {
		console.log('Port', process.env.PORT);
	});
})();