(function(){
	'use strict';

	var express 					= require('express');
	var path							= require('path');
	var jade							= require('jade');
	var app 							= express();

	/* Jade Setup */
	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');

	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');

	app.get('/', function (req, res) {
		res.render('index');
	});

	app.listen(process.env.PORT, function () {
		console.log('Port', process.env.PORT);
	});
})();