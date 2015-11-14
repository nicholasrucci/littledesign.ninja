(function(){
	"use strict";

	var User = require('../models/users');

	var FavoritesController = {
		add: function(req, res) {
			User.findByIdAndUpdate(req.user._id,
				{$push: {favorites: {
					id: req.body.video_id,
					title: req.body.video_title,
					author: req.body.video_author,
					duration: req.body.video_duration
				}}},
				{	safe: true, upsert: true, new: true },
				function(err, model) {
					console.log(err);
				}
			);
			res.redirect('/videos/' + req.body.video_id);
		},

		remove: function(req, res) {

		}
	};

	module.exports = FavoritesController;
})();