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
/**
 * 一、匿名聊天
 * 1. 监听按钮的点击事件
 * 2. 当点击事件发生后，执行回调函数，在回调函数里获得输入框的内容，然后把此内容发送给服务器
 * 3. 服务器收到此内容之后广播给所有的客户端  io.emit('message','聊天内容');
 * 4.客户端 监听 服务器的消息，向ul里添加一个新的li.
 *
 * 二、具名聊天
 * 三、私聊
 * 四、实现私人房间功能
 * 五、聊天信息存入mongodb持久化
 * 六、显示房间在线人员
 */
//先在内存里存放所有的消息数组
var messages = [];
io.on('connection',function(socket){
     var username;//此用户的用户名
    //进入函数就表示客户端已经连接成功了
    //监听客户端发过来的消息
   socket.on('message',function(message){
       if(username){
           //服务器把消息放在消息数组里
           messages.push({username,content:message,createAt:new Date()});
           //向所有连接的客户端发送消息 用户名 内容 时间
           io.emit('message',{username,content:message,createAt:new Date()});
       }else{
           username = message;
           io.emit('message',{username:'系统',content:`欢迎 ${username}加入聊天室`,createAt:new Date()});
       }

   });
   //在服务器监听客户端发过来要求获得所有的消息事件,发回所有消息数组
   socket.on('getAllMessages',function(){
       //服务器上客户端发射一件allMessages事件,
      socket.emit('allMessages',messages);
      socket.send({username:'系统',content:'请输入呢称',createAt:new Date()});
   });
});
//当监听一个端口的时候服务器才算真正启动成功
server.listen(8080);