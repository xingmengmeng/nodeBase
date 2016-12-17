var express = require('express');
var path = require('path');
var app = express();
/*app.get('/bootstrap.min.css',function(req,res){
res.send('xx');
});*/
//使用这个中间件之后，此中间件原理是去public目录下找找有没有这个文件，如果有则读出来返回给客户端，如果没有则 next
app.use(express.static(path.resolve('public')));
//当客户端访问/的时候，返回一个index.html文件
app.get('/',function(req,res){
    //从当前路径出发向下找找一个绝对路径
    res.sendFile(path.resolve('index.html'));
    //res.sendFile('./index.html',{root:__dirname});
});

//app.listen();
/*app.listen();
app.listen = function listen() {
    var server = http.createServer(this);
    server.listen(8080);
    return server.listen.apply(server, arguments);
};*/

//创建一个http服务器，把 app传进去作为监听函数,当有请求到来的时候此函数
var server = require('http').createServer(app);
//因为websocket服务器依赖http服务器，所以需要把server传进去
var io = require('socket.io')(server);
//websocket服务器监听客户端的请求，当有请求到来的时候执行回调函，并为每个请求创建一个socket实例
io.on('connection',function(socket){
    //进入函数就表示客户端已经连接成功了
    //监听客户端发过来的消息
   socket.on('message',function(message){
        console.log(message);
        //服务器向客户端发消息
        socket.send('服务器确认:'+message);
   });
});
//当监听一个端口的时候服务器才算真正启动成功
server.listen(8080);