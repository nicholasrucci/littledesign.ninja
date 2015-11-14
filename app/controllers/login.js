(function(){
	'use strict';

	var Video = require('../models/videos');

	var SessionsController = {

		create: function(req, res) {
			res.redirect('/profile');
		},

		profile: function(req, res) {
			var dbQuery = {};
			Video.find(dbQuery, function (err, videos) {
				if (err) console.log(err);
				else {
					res.render('users/profile', {
						user: req.user,
						videos: videos
					});
				}
			});
		},

		destroy: function(req, res) {
			req.logout();
			res.redirect('/');
		}
	};

	module.exports = SessionsController;
})();