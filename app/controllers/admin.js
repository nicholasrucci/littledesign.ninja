(function(){
	'use strict';

	var Video = require('../models/videos');

	var AdminController = {
		dashboard: function(req, res) {
			res.render('admin/dashboard');
		},

		adminIndex: function(req, res) {
			var dbQuery = {};
			Video.find(dbQuery, function (err, allVideos) {
				if (err) {
					console.log(err);
				} else {
					res.render('admin/index', {
						videos: allVideos
					});
				}
			});
		},

		new: function(req, res) {
			res.render('admin/new');
		},

		create: function(req, res) {
			req.file('video').upload({
				dirname: __dirname + '../../../public/uploads',
				maxBytes: 1500000000
			}, function(err, uploadedFiles){
				if(err) {
					return res.sendStatus(500, err);
				}
				if(uploadedFiles.length) {
					var file = uploadedFiles[0];
					console.log(file);
					var videoUrl = file.fd.match(/uploads\/[a-z0-9-]+\..+/);

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
						res.redirect('/admin');
					});

				} else {
					res.sendStatus(422);
				}
				console.log('Files Uploaded ', uploadedFiles);
			});
		},

		update: function(req, res) {
			Video.findOneAndUpdate({ _id: req.params.id }, {
				title: req.body.title,
				description: req.body.description,
				author: req.body.author,
				duration: req.body.duration
			}, function(err, video) {
				res.redirect('/videos/' + req.params.id);
			});
		},

		edit: function(req, res) {
			Video.findOne({_id: req.params.id}, function(err, video) {
				res.render('admin/edit', { video: video });
			});
		},

		delete: function(req, res) {
			Video.remove({ _id: req.params.id }, function(err) {
				if (err) console.log("Something went wrong");
				else { res.redirect('/'); }
			});
		}
	};

	module.exports = AdminController;
})();