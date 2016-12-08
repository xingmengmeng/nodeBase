var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// npm install gulp-inject --save-dev
/**
 * 1. 得到要被插入的html文件
 * 2. 得到将要被插入的js 和 css文件
 * 3. 把这些js和css文件的引用标签插入到html中
 * 4. 把处理后的html保存目标路径里
 */
gulp.task('inject',function(){
  //得到要被插入的html文件文件流
  var src = gulp.src('./app/index.html');
  //得到将要被插入的js 和 css文件
  var source = gulp.src(['./build/js/all.min.js','./build/css/all.min.css']);
   src.pipe($.inject(source))
       .pipe(gulp.dest('./build'));
});
