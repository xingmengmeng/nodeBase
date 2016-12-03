var express  = require('express');
var app = express();
//users里面存放着所有的用户
var users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
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
  if(user){
      res.end(JSON.stringify({code:'success',data:user}));
  }else{
      res.end(JSON.stringify({code:'fail',data:'此用户不存在'}));
  }
})
app.listen(8080);