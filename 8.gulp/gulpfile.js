var gulp=require('gulp');
var $=require('gulp-load-plugins')();//元素的  非自己的  需要安装模块
gulp.task('html',function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe($.connect.reload());
})

gulp.task('css',function () {
    gulp.src('./src/less/*.less')
        .pipe($.less())
        .pipe($.concat('all.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe($.cleanCss())
        .pipe($.rename(function (file) {
            file.basename+='.min';
        }))
        .pipe(gulp.dest('./build/css'));
})
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
        .pipe($.plumber())
        .pipe($.babel({presets:['es2015']}))
        .pipe($.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe($.uglify())
        .pipe($.rename(function(file){
            file.basename += '.min';
        }))
        .pipe(gulp.dest('./build/js'))
});
gulp.task('img',function () {
    gulp.src('./src/imgs/**/*.*')
        .pipe(gulp.dest('./build/imgs'));
})
gulp.task('server',function () {
    $.connect.server({
        port:3000,//端口
        root:'./build',//根目录
        livereload:true,//启动自动刷新
    })
})
gulp.task('watch',function () {
    gulp.watch('./src/index.html',['html','inject']);
    gulp.watch('./src/less/*.less',['css','html','inject']);
    gulp.watch('./src/js/*.js',['js','html','inject']);
})
gulp.task('inject',function(){
    var src = gulp.src('./src/index.html');
    var source = gulp.src(['./build/js/all.min.js','./build/css/all.min.css']);
    src.pipe($.inject(source,{ignorePath:'build',addRootSlash:false}))
        .pipe(gulp.dest('./build'));
});
gulp.task('default',['js', 'css', 'img', 'html', 'server', 'watch','inject'],function () {
    console.log('tasks all done!')
})
