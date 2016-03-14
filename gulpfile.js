'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
// var chai = require('gulp-chai');
var eslint = require('gulp-eslint');


var paths = [__dirname + '/test/*.js', __dirname + '/router/*.js', __dirname + '/index.js'];

gulp.task('eslint', () => {
  gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', () => {
  gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(paths);
});

gulp.task('default', ['eslint', 'test']);
