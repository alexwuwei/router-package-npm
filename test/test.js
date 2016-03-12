'use strict';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
var expect = chai.expect;
var request = chai.request;
// require(__dirname + '/../routes/route-handle.js');
var testRouter = require(__dirname + '/../router/router.js');



describe('testing GET method', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should successfully hit a defined route when submitting a GET request', function(done) {

  });
});

describe('testing POST method', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should successfully hit a defined route when submitting a POST request', function(done) {

  });
});

describe('testing PUT method', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should successfully hit a defined route when submitting a PUT request', function(done) {

  });
});

describe('testing DEL method', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should successfully hit a defined route when submitting a DEL request', function(done) {

  });
});

describe('testing route creation', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should successfully create a route along with a defined REST method', function(done) {

  });
});

describe('testing invalid resource', function() {
  before(function(){
    var productsRouter = new testRouter;
    http.createServer(productsRouter.route()).listen(3000)
  });
  it('should return a 404 error when requesting an invalid route', function(done) {

  });
});
