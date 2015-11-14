(function(){
	'use strict';

	var User = require('../models/users');

	var UsersController = {
		create: function(req, res) {
			var user = new User({
				username: req.body.username
			});
			User.register(user, req.body.password, function(err) {
				if (err) {
					res.render('index', { message: err.message });
				}
				else {
					res.redirect('/');
					console.log('Registered.');
				}
			});
		}
	};

	module.exports = UsersController;
})();