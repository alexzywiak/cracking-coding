var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sourcemapSupport = require('gulp-sourcemaps-support');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task('default', function(){
  return gulp.src('es2015/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets:["es2015"]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['default'], function(){
  return gulp.src('dist/**/test/*.js', {read: false})
    .pipe(mocha({
      reporter: 'nyan'
    }));
});