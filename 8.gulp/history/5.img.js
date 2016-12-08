var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 *  1. 要求把imgs所有的图片都拷贝到build目录
 *  ** 能匹配多级目录，路径分隔符
 *  2.只拷贝png和jpg
 *   {,} 表示或的关系
 *  3.拷贝所有的的图片，但是不要gif
 **/
gulp.task('img',function(){
    gulp.src(['./app/imgs/**/*.*','!./app/imgs/**/*.gif'])
        .pipe(gulp.dest('./build/imgs'))
});