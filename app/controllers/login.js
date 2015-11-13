(function(){
	'use strict';

	var SessionsController = {
		new: function(req, res) {
			res.render('login');
		},

		create: function(req, res) {
			res.redirect('/');
		},

		destroy: function(req, res) {
			req.logout();
			res.redirect('/');
		}
	};

	module.exports = SessionsController;
})();