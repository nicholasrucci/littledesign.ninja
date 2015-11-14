(function(){
	'use strict';

	var SessionsController = require('../../controllers/login.js');
	var passport = require('passport');

	var isAuthed = function(req, res, next) {
		if (req.user) {
			next();
		}	else {
			res.render('index');
		}
	};

	module.exports = function(app) {
		app.get('/login', SessionsController.new);
		app.post('/login', passport.authenticate('local'), SessionsController.create);
		app.get('/profile', isAuthed, SessionsController.profile);
		app.get('/logout', SessionsController.destroy);
	};

})();