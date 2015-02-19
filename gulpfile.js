var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function () {
  return gulp.src(['index.js', 'lib/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('test', ['lint'], function () {
  return gulp.src('test/subot.specs.js')
    .pipe(mocha({reporter: 'spec'}));
});
