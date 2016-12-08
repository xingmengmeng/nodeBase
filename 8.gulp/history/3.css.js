var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('css',function(){
  gulp.src('./app/less/*.less')
      .pipe($.less())
      .pipe($.concat('all.css'))
      .pipe(gulp.dest('./build/css'))
      .pipe($.cleanCss())
      .pipe($.rename(function(file){
        file.basename += '.min';
      }))
      .pipe(gulp.dest('./build/css'))
});