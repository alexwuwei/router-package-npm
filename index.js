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


// var app = express()
// var app = myFramework() corresponds to name in package.json
// myFramework.listen(3000);
