(function() {
  'use strict';

  var VideoController = require('../../controllers/videos.js');

  module.exports = function(app) {
    app.get('/videos', VideoController.index);
    app.get('/videos/new', VideoController.new);
    app.post('/videos/create', VideoController.create);
    app.get('/videos/(:id)/edit', VideoController.edit);
    app.put('/videos/(:id)', VideoController.update);
    app.delete('/videos/(:id)', VideoController.delete);
  };

}());