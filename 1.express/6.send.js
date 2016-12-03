var express  = require('express');
//console.log();
var STATUS_CODES = require('_http_server').STATUS_CODES;
var app = express();
//users里面存放着所有的用户
var users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
app.use(function(req,res,next){
  res.send = function(body){
    var type = typeof body;
    switch (type){
        //如果参数类型是对象的话，可以转成字符串
        case 'object':
            body = JSON.stringify(body);
            break;
            //如果参数类型是数字的话
        case  'number':
            //把此数字当成响应状态码
            res.statusCode = body;
            //取得状态码对应的原因短语作为响应体
            body = STATUS_CODES[body];
            break;
    }
    res.end(body);
  }
  next();
});
//编写一个路由 当客户端访问 /users/id的时候，会执行此路由
// 访问/users/1 返回 {code:'success',data:{id:1,name:'zfpx1'}}
// 访问/users/2 返回 {code:'success',data:{id:2,name:'zfpx2'}}
// 访问/users/3 返回 {code:'fail',data:'此用户不存在'}
app.get('/users/:id',function(req,res){
    //获取路径参数 id =1
  var id = req.params.id;
  //find方法有一个参数是一个函数，此函数接收一个用户对象，可以有一个返回值，如果返回true,表示找到目标对象，会把此目标对象作为find方法的返回值，如果返回false,会继续往下找
  var user = users.find(function(user){
     return user.id == id;
  });
  //TypeError: First argument must be a string or Buffer
    //send 可以接收任意类型的参数，另外还可以自动设置内容类型 Content-Type
  if(user){
      res.send({code:'success',data:user});
  }else{
      res.send({code:'fail',data:'此用户不存在'});
  }
})

app.all('*',function(req,res){
    console.log('404请求');
    res.send(404);
})

app.listen(8080);