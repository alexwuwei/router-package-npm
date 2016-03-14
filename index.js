'use strict';

var http = require('http');
var Router = require(__dirname + '/router/router.js');

module.exports = function() {
  var router = new Router();
  router.listen = function(port){
    http.createServer(router.route()).listen(port);
  };
  return router;
};
