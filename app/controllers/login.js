(function(){
	'use strict';

	var SessionsController = {
		new: function(req, res) {
			res.render('login');
		},

		create: function(req, res) {
			res.redirect('/profile');
		},

		profile: function(req, res) {
			res.render('profile', {
				user: req.user,
				videos: req.videos
			});
		},

		destroy: function(req, res) {
			req.logout();
			res.redirect('/');
		}
	};

	module.exports = SessionsController;
})();