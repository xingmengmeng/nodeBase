var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
//设置模板引擎为html,当你不输入模板后缀的时候，会自动添加此后缀 去查找模板文件
app.set('view engine','html');
//设置模板的存放目录
app.set('views',path.resolve('views'));
//针对此类型后续 模板用哪个函数来进行渲染
app.engine('.html',require('ejs').__express);
/**
 * 1.注册的时候判断用户名是否重复
 * 2.模板使用html后缀
 * 3.在欢迎页显示登录成功人的用户名
 */
var users = [];
//注册
app.get('/signup',function(req,res){
   //获取查询字符串中的用户名
   var user = req.query;
   if(user.username){//如果有值则意味着提交表单过来的，要注册
       var oldUser = users.find(function(item){
           return item.username == user.username;
       })
       if(oldUser){
           res.cookie('error','此用户名已经被占用，请换个新的试试吧');
           res.redirect('/signup');
       }else{
           users.push(user);
           res.redirect('/signin');
       }
   }else{
       var error = req.cookies.error;
       res.render('signup',{error:error});
   }

});
//登录
app.get('/signin',function(req,res){
    res.render('signin',{});
});
//欢迎
app.get('/welcome',function(req,res){
    res.render('welcome',{});
});

app.listen(8080);