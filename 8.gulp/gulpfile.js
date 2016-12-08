var gulp = require('gulp');
var $ = require('./gulp-load-plugins')();

/**
 * 实现js文件处理
 * 1. 多个js文件合并成一个文件
 * 2. 压缩里面的换行空格和参数名
 * 3. 导出
 **/
gulp.task('js',function(){
 gulp.src('./app/js/*.js')
     //把多个文件合并成一个文件，并指定合并后的文件名
     .pipe($.concat('all.js'))
     .pipe(gulp.dest('./build/js'))
     //uglify只能压缩js文件，不能压缩css html
     .pipe($.uglify())
     .pipe($.rename('all.min.js'))
     .pipe(gulp.dest('./build/js'));
});