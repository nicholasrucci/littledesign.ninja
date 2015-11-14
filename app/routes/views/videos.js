(function() {
  'use strict';

  var VideoController = require('../../controllers/videos.js');

	var isAdmin = function(req, res, next) {
		if (req.user) {
			if (req.user.admin) next();
			else { res.redirect('/'); }
		}
		else { res.redirect('/'); }
	};

  module.exports = function(app) {
    app.get('/tutorials', VideoController.index);
    app.get('/videos/(:id)/', VideoController.show);
  };

}());