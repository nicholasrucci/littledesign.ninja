(function() {
  'use strict';

  var mongoose = require('mongoose');

  var schema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    duration: String,
    video: String
  });

  var Video = mongoose.model('Video', schema);

  module.exports = Video;

}());