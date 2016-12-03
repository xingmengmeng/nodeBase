// 引入express模块，返回值是一个函数
var express = require('express');
//调用此函数会返回一个新的函数
// app的核心本质就是一个请求监听函数
var app = express();
//如果客户端是以get方法向服务器发送 /路径请求的话，由第二个参数来进行处理
//这就是一个路由的规则
app.get('/',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('首页');
});
app.get('/about',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('关于我们');
});
//不关心方法名，能匹配所有的方法，只匹配路径即可
/*app.all('/home',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('回家');
});
app.get('*',function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('星星照我回家');
});*/
app.listen(8080);

/*
var server = http.createServer(app);
return server.listen(8080)
*/


