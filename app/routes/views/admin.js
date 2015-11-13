(function(){
	'use strict';

	var AdminController = require('../../controllers/admin.js');

	var isAdmin = function(req, res, next) {
		if (req.user) {
			if (req.user.admin) next();
			else { res.redirect('/'); }
		}
		else { res.redirect('/'); }
	};

	module.exports = function(app) {
		app.get('/admin', isAdmin, AdminController.dashboard);
	};
})();