(function(){
	'use strict';

	var UsersController = require('../../controllers/users.js');

	module.exports = function(app) {
		app.get('/users/new', UsersController.new);
		app.post('/users', UsersController.create);
	};
})();