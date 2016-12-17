var Server = require('ws').Server;
//创建一个Websocket服务器的实例，并指定端口号
var server = new Server({port:8080});
//监听客户端的连接,当客户端连接上来之后执行对应的回调函数
//这个socket是每个客户端所特有的,每个客户端连接上来之后给他建一个socket
server.on('connection',function(socket){
    console.log('客户端已经连接');
    //监听客户端发过来的消息
    socket.on('message',function(message){
        console.log(message)
        //服务器向这个客户端 发送消息
        socket.send("服务器说:"+message);
    });
});
