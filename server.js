(function(){
	'use strict';

	var express 					= require('express');
	var path							= require('path');
	var jade							= require('jade');
	var flash							= require('connect-flash');
	var mongoose					= require('mongoose');
	var passport					= require('passport');
	var skipper						= require('skipper');
	var session						= require('express-session');
	var cookieParser			= require('cookie-parser');
	var config            = require('./app/config/config.js');
	var methodOverride   	= require('method-override');
	var paginate					= require('paginate');
	var app								= express();

	/* Jade Setup */
	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');
	app.use(express.static('public'));

	mongoose.connect('mongodb://localhost/ninja');

	app.use(skipper());
	app.use(cookieParser());
	app.use(session(config.session));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());
	app.use(methodOverride('_method'));
	app.use('/uploads', express.static('public/uploads'));

	require('./app/config/passport')(passport);
	require('./app/routes/views/users')(app);
	require('./app/routes/views/login')(app);
	require('./app/routes/views/admin')(app);
	require('./app/routes/views/videos')(app);
	require('./app/routes/views/favorites')(app);
	require('./app/routes/views/index')(app);



	app.listen(process.env.PORT, function () {
		console.log('Port', process.env.PORT);
	});
})();