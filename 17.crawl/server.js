var express = require('express');
var path = require('path');
var app = express();
//设置模板引擎
app.set('view engine','html');
//指定模板的存放目录
app.set('views',path.resolve('./views'));
//设置对于.html结尾的模板用ejs的函数进行渲染
app.engine('.html',require('ejs').__express);
app.use(express.static(path.resolve('public')));
var Movie = require('./db').Movie;
/**
 * 1.在express引入模板
 * 2.读出所有的电影数组
 * 3. 渲染模板并返回给客户端 render
 */
app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        if(err){
            res.render('error',{err});
        }else{
            res.render('index',{movies});
        }
    })
});
app.listen(8080);