(function(){
	'use strict';

	var express 					= require('express');
	var app 							= express();

	app.get('/', function (req, res) {
		res.send('Test');
	});

	app.listen(process.env.PORT, function () {
		console.log('Port', process.env.PORT);
	});
})();