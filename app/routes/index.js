(function() {
  'use strict';

  module.exports = function(app) {
    require('./views/users.js')(app);
    require('./views/videos.js')(app);
  };

}());