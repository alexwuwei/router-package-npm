'use strict';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var fs = require('fs');
var expect = chai.expect;
var request = chai.request;
var http = require('http');
// require(__dirname + '/../routes/route-handle.js');
var Router = require(__dirname + '/../router/router');

describe('testing GET method', function() {
  before(function(){
    var productsRouter = new Router();
    productsRouter.get('/products', function(req, res) {
      console.log('get route set for products');
      res.write('GET route hit');
      res.end();
    });
    productsRouter.post('/products', function(req,res){
      console.log('post route set for /products');
      res.write('POST route hit');
      res.end();
    });
    http.createServer(productsRouter.route()).listen(3000);
  });
  it('should successfully hit a defined route when submitting a GET request', function(done) {
    request('localhost:3000')
    .get('/products')
    .end(function (err, res) {
      // expect(err).to.equal(null);
      expect(res.text).to.include('GET');
      expect(res).to.have.status(200);
      //more tests
      done();
    });
  });
  it('should successfully hit a defined route when submitting a POST request', function(done) {
    request('localhost:3000')
    .post('/products')
    .send({'Product':'Raft'})
    .end(function (err, res) {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      //more tests
      done();
    });
  });
  it('should successfully hit a defined route when submitting a DEL request', function(done) {
    request('localhost:3000')
    .del('/products/raft')
    .end(function (err, res) {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      //more tests
      done();
    });
  });
  it('should return a 404 error when requesting an invalid route', function(done) {
    request('localhost:3000')
    .get('/products/dfsdafwefwe')
    .end(function (err, res) {
      expect(res).to.have.status(404);
      //more tests
      done();
    });
  });
});

describe('testing route creation', function() {
  before(function(){
    var foodRouter = new Router();
    foodRouter.get('/food', function(req, res){
      console.log('GET route set for /food');
      res.write('GET route created for /food');
      res.end();
    });
    http.createServer(foodRouter.route()).listen(3030);
  });
  it('should successfully create a GET route using the Router constructor', function(done) {
    request('localhost:3030')
    .get('/food')
    .end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.text).to.include('GET');
      done();
    });
  });
});
