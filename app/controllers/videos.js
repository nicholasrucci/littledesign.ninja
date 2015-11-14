(function() {
  'use strict';

  var Video = require('../models/videos');

  var VideoController = {
    index: function(req, res) {
      var dbQuery = {};
      Video.find(dbQuery, function (err, videos) {
        if (err) {
          console.log(err);
        } else {
          res.render('videos/tutorials', {
						videos: videos,
						user: req.user
					});
        }
      });
    },

    show: function(req, res) {
      Video.findOne({_id: req.params.id}, function(err, video) {
        res.render('videos/tutorial', {
					video: video,
					user: req.user
				});
      });
    }
  };

  module.exports = VideoController;

}());