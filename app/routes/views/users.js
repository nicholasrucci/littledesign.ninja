(function(){
	'use strict';

	var UsersController = require('../../controllers/users.js');

	var isAuthed = function(req, res, next) {
		if (req.user) {
			res.redirect('/');
		}
		next();
	};

	module.exports = function(app) {
		app.post('/', UsersController.create);
	};
})();