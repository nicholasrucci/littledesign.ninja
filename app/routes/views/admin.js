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
		app.get('/admin/videos', isAdmin, AdminController.adminIndex);
		app.get('/admin/videos/new', isAdmin, AdminController.new);
		app.post('/admin/videos', isAdmin, AdminController.create);
		app.get('/admin/videos/(:id)/edit', isAdmin, AdminController.edit);
		app.put('/videos/(:id)', isAdmin, AdminController.update);
		app.delete('/videos/(:id)', isAdmin, AdminController.delete);
	};
})();