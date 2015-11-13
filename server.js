(function(){
	'use strict';

	var express 					= require('express');
	var path							= require('path');
	var jade							= require('jade');
	var mongoose					= require('mongoose');
	var app								= express();

	/* Jade Setup */
	app.set('views', path.join(__dirname, 'app/views'));
	app.set('view engine', 'jade');

	mongoose.connect('mongodb://localhost/ninja');

	app.get('/', function (req, res) {
		res.render('index');
	});

	app.listen(process.env.PORT, function () {
		console.log('Port', process.env.PORT);
	});
})();