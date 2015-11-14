(function() {
  'use strict';

  var Video = require('../models/videos');

  var VideoController = {
    index: function(req, res) {
      var dbQuery = {};
      Video.find(dbQuery, function (err, allVideos) {
        if (err) {
          console.log(err);
        } else {
          res.render('tutorials', {
						videos: allVideos
					});
        }
      });
    },

    show: function(req, res) {
      Video.findOne({_id: req.params.id}, function(err, video) {
        res.render('tutorial', {
					video: video,
					user: req.user
				});
      });
    }
  };

  module.exports = VideoController;

}());