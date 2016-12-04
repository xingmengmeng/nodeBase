var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(cookieParser());
app.use(session({
    secret:'zfpx',
    resave:true,
    saveUninitialized:true
}));
//处理请求体格式为 application/x-www-form-urlencoded
//都是把请求体对象加到 req.body上 username=11&password=222->{username:11,password:222}
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
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
 * 4.把提交注册表和登录表单改成post方式
 * 5.如果注册出错了，需要把出错信息放在session中，返回上一个页面的时候显示在页面上。
 */
var users = [];
//注册
app.get('/signup',function(req,res){
    res.render('signup',{error:req.session.error});
});
// 处理注册表单的post提交
app.post('/signup',function(req,res){
    var user = req.body; //{username:11,password:222}
    var oldUser = users.find(function(item){
        return item.username == user.username;
    })
    if(oldUser){
        req.session.error = '此用户名已经被占用，请换个新的试试吧';
        res.redirect('/signup');// get
    }else{
        users.push(user);
        res.redirect('/signin');
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