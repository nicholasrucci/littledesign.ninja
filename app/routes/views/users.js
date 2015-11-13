(function(){
	'use strict';

	var UsersController = require('../../controllers/users.js');

	var isAuthed = function(req, res, next) {
		if (req.user) {
			res.redirect('/');
		}
	};

	module.exports = function(app) {
		app.get('/users/new', isAuthed, UsersController.new);
		app.post('/users', UsersController.create);
	};
})();