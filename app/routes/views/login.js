(function(){
	'use strict';

	var SessionsController = require('../../controllers/login.js');
	var passport = require('passport');

	var isAuthed = function(req, res, next) {
		if (req.user) {
			next();
		}	else {
			res.redirect('/');
		}
	};

	module.exports = function(app) {
		app.post('/login', passport.authenticate('local'), SessionsController.create);
		app.get('/profile', isAuthed, SessionsController.profile);
		app.get('/logout', SessionsController.destroy);
	};

})();