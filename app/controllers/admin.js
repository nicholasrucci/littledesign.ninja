(function(){
	'use strict';

	var AdminController = {
		dashboard: function(req, res) {
			res.render('dashboard');
		}
	};

	module.exports = AdminController;
})();