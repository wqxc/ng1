'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var pathSrcJs = [
  path.join(conf.paths.dist, '/zhaimi_common.js'),
];

function runTests(singleRun, done) {
  var reporters = ['progress'];
  var preprocessors = {};

  if (singleRun) {
    pathSrcJs.forEach(function(path) {
      preprocessors[path] = ['coverage'];
    });
    reporters.push('coverage');
  }

  var localConfig = {
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters,
    preprocessors: preprocessors,
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error('Failed ' + failCount + ' tests.') : null);
  });
  server.start();
}

gulp.task('test', ['build'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
  runTests(false, done);
});
