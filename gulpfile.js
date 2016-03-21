var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task('default', function(){
  return gulp.src('es2015/**/*.js')
    .pipe(babel({
      presets:["es2015"]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', ['default'], function(){
  return gulp.src('dist/**/test/*.js')
    .pipe(mocha({
      reporter: 'nyan'
    }));
});