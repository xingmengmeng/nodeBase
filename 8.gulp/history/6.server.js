var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('html',function(){
  gulp.src('./app/index.html')
      .pipe($.rename('main.html'))
      .pipe(gulp.dest('./build'))
      .pipe($.connect.reload())//拷贝完毕之后通知浏览器自动刷新
});
/**
 * npm install gulp-connect --save-dev
 * 1 建立或者说启动一个http服务器提供服务
 **/
gulp.task('serve',function(){
    //启动一个静态文件服务器
    $.connect.server({
        port:8080,//端口号
        root:'./build',//静态文件根目录
        livereload:true//是否启动实时刷新功能
    });
});

gulp.task('watch',function(){
  gulp.watch('./app/index.html',['html'])
});
//如果gulp命令后面没有加任务名的话会默认执行default任务
gulp.task('default',['serve','watch'],function(){
    console.log('tasks all done!');
});