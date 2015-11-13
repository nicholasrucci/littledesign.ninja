(function(){
	'use strict';

	var User = require('../models/users');

	var UsersController = {
		new: function(req, res) {
			res.render('signUp', {});
		},

		create: function(req, res) {
			var user = new User({
				username: req.body.username
			});
			User.register(user, req.body.password, function(err) {
				if (err) { console.log(err); }
				else {
					res.redirect('/');
					console.log('Registered.');
				}
			});
		}
	};

	module.exports = UsersController;
})();