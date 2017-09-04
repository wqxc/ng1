'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function() {
  return gulp.src(path.join(conf.paths.src, '/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size());
});
