var Socket = require('ws');
//当创建实例的时候，客户端马上要连接服务器
var socket = new Socket("ws://127.0.0.1:8080");
//客户端成功连接服务器后要执行回调函数
socket.on('open',function(){
    console.log('连接成功');
    socket.send('服务器你好!');
});
//客户端可以监听服务器发过来的消息 message是消息内容
socket.on('message',function(message){
  console.log(message);
});

