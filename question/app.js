/**
 * Created by Administrator on 2016/12/4.
 */
var express = require('express');
var path = require('path');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({resave:true,saveUninitialized:true,secret:'ymd'}));
/*设置模板引擎为HTML 当不输入后缀名是 会自动添加此后缀 去查找模板文件*/
app.set('view engine', 'html');
/*设置存放目录*/
app.set('views', path.resolve('.iews'));
/*针对此类型后缀 模板用哪个函数来解读*/
app.engine('.html', require('ejs').__express);

/*
 * 1.注册的时候判断用户名是否重复
 * 2，模板使用html后缀
 * 3.在欢迎页显示登录成功的用户名
 * 4.把提交注册表和登录表单改成post方式
 * 5.如果注册出错了，需要把出错信息放在session中，返回上一个页面的时候显示在页面上。
 * */
var users = [];
//注册
app.get('/signup',function(req,res){
    res.render('signup',{});/*error:res.session.error*/
});
// 处理注册表单的post提交
app.post('/signup',function(req,res){
    var user = req.body;
    //console.log(user);
    var oldUser = users.find(function(item){
        return item.username == user.username;
    });
    if(oldUser){
        res.session.error='此用户名已经被占用，请换个新的试试吧';
        res.redirect('/signup');
    }else{
        users.push(user);
        res.redirect('/signin');
    }
});
//登录
app.get('/signin', function (req, res) {
    res.render('signin', {})
});
app.post('/signin', function (req, res) {
    var user=req.body;
    if(user.username){
        var nUser = users.find(function(item){
            return item.username = user.username && (item.password = user.password);
        });
        if(nUser){
            res.session.username = nUser.username;
            res.redirect('/welcome');
            //res.render('welcome')
        }else{
            res.redirect('back');
        }
    }
});
//欢迎
app.get('/welcome', function (req, res) {
    res.render('welcome', {username:req.body.username})
});
app.listen(80,function(){
    console.log('ok');
});