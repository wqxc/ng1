'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
  var sassOptions = {
    style: 'expanded',
  };

  var injectFiles = gulp.src(path.join(conf.paths.src, '/*/*.scss'), {read: false});

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false,
  };

  return gulp.src([
    path.join(conf.paths.src, '/style.scss'),
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.css2js())
    .pipe(gulp.dest(conf.paths.tmp));
});
