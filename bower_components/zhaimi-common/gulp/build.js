'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('partials', function() {
  return gulp.src([
    path.join(conf.paths.src, '/**/*.html'),
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
    }))
    .pipe($.ngHtml2js({
      moduleName: function(file) {
        var srcPath = path.resolve(conf.paths.src);
        return path.relative(srcPath, file.path);
      }
    }))
    .pipe($.concat('partials.js'))
    .pipe(gulp.dest(conf.paths.tmp));
});

function build() {
  var relativePath = '../dist/';
  return gulp.src([
    path.join(conf.paths.src, '/index.module.js'),
    path.join(conf.paths.tmp, '/partials.js'),
    path.join(conf.paths.tmp, '/style.js'),
    path.join(conf.paths.src, '/**/*.js'),
    '!' + path.join(conf.paths.src, '/**/*.spec.js'),
  ])
    .pipe($.ngAnnotate({add: true}))
    .pipe($.concat('zhaimi_common.js'))
    .pipe(gulp.dest(path.join(__dirname, relativePath)))
    .pipe($.concat('zhaimi_common.min.js'))
    .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
    .pipe(gulp.dest(path.join(__dirname, relativePath)));
}

gulp.task('build', ['partials', 'styles', 'scripts'], function() {
  build();
});
