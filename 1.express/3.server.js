//引入express模块返回值是一个函数
var express= require('express');
//调用此函数 会返回一个新的函数
//app的核心本质就是一个请求监听函数
var app =express();
//如果客户端是以get方法向服务器发送  /路径请求的话， 由第二个参数来进行处理
//这就是一个路由的规则
app.get('/',function (request,response) {
    response.end('首页')
})
app.get('/about',function (request,response) {
    response.end('关于我们')
})
app.get('/signup',function (request,response) {
    response.end('注册')
})
app.get('/signin',function (request,response) {
    response.end('登录')
})
app.get('/signout',function (request,response) {
    response.end('退出')
})
app.all('*',function (request,response) {
    response.end('你访问的路径不存在')
})

app.listen(8080);
