'use strict';

var Router = module.exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DEL': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes.GET[route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes.POST[route] = cb;
};

Router.prototype.put = function(route, cb) {
  this.routes.PUT[route] = cb;
};

Router.prototype.del = function(route, cb) {
  this.routes.DEL[route] = cb;
};

Router.prototype.route = function() {
  return (req, res) => {
    var routeFunction  = this.routes[req.method][req.url]
    // if (routeFunction instanceof Function) {
      routeFunction(req, res)
    // } else {
    //   res.writeHead(404, {'Content-Type': 'application/json'});
    //   res.end('404, Resource Not Found :(');
    // }
  };
};
