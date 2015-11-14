(function(){
	'use strict';

	var SessionsController = require('../../controllers/login.js');
	var passport = require('passport');

	module.exports = function(app) {
		app.get('/login', SessionsController.new);
		app.post('/login', passport.authenticate('local'), SessionsController.create);
		app.get('/profile', SessionsController.profile);
		app.get('/logout', SessionsController.destroy);
	};

})();