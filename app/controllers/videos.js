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
          res.json(allVideos);
        }
      });
    },

    new: function(req, res) {
      res.render('videos/new');
    },

    create: function(req, res) {
      console.log(req.file('video'));
      req.file('video').upload({
        dirname: __dirname + '/../uploads',
        maxBytes: 150000000
      }, function(err, uploadedFiles){
          if(err) {
            return res.sendStatus(500, err);
          }
          if(uploadedFiles.length) {
            var file = uploadedFiles[0];
            console.log(file);
            var videoUrl = file.fd.match(/[a-z0-9-]+\..+$/)[0];

            var video = new Video({
              title: req.body.title,
              description: req.body.description,
              author: req.body.author,
              duration: req.body.duration,
              video: videoUrl
            });

            video.save(function(err) {
              if (err) {
                console.log(err);
              }
              res.redirect(200, '/');
            });

          } else {
            res.sendStatus(422);
          }
        console.log('Files Uploaded ', uploadedFiles);
      });
    },

    update: function(req, res) {

    },

    edit: function(req, res) {
      Video.findOne({_id: req.params.id}, function(err, video) {
        res.render('videos/edit', {video: video});
      });
    },

    show: function(req, res) {
      Video.findOne({_id: req.params.id}, function(err, video) {
        res.json(video);
      });
    },

    delete: function(req, res) {

    }
  };

  module.exports = VideoController;

}());