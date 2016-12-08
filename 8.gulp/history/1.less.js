var gulp = require('gulp');
/**
 * 1参数是 任务的名字
 * 2参数是任务的定义
 * 当在控制台执行此任务的时候就相当于执行了此函数
 */
gulp.task('hello',function(){
  console.log('hello');
});
var less = require('gulp-less');

//把less编译成css
// {name:'index.less',content:'...less'}
// {name:'index.css',content:'...css'}
gulp.task('css',function(){
  //获取输入的文件流 glob 文件匹配模板=文件路径的通配符
   gulp.src('./app/less/*.less')
       //导入到目标插件中
   //插件 1. 把less编译成css 2.修改文件后缀less->css
       .pipe(less())
   //将编译后的文件导出的目标目录，不是文件名
       .pipe(gulp.dest('./build/css'));
})