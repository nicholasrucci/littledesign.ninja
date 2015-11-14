(function(){
	'use strict';

	var FavoritesController = require('../../controllers/favorites.js');
	var passport = require('passport');

	module.exports = function(app) {
		app.post('/favorite/add', FavoritesController.add);
		app.delete('/favorite/remove', FavoritesController.remove);
	};

})();