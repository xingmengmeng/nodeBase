var express = require('express');
var url = require('url');
var log = console.log;
var app = express();
/**
 * 1.中间间可以用来增加公有方法和属性
 */
app.use(function(req,res,next){
  var urlObj = url.parse(req.url,true);
  req.path = urlObj.pathname;
  req.query = urlObj.query;
  res.end('不往下走了');
  //next();
});
/**
 * 1.获取请求方法，请求的路径名，请求的查询字符串对象
 * 2.请求头
 */
app.get('/users',function(req,res){
    log(req.method);
    //获取请求路径
    log(req.path);// = url.parse(req.url).pathname;
    //获取查询字符串对象
    log(req.query);//= url.parse(req.url).query
    //获取请求头
    log(req.headers);
    res.end('users');
});
//   /users/1?name=zfpx 也就是说路径可以写正则表达式，只要请求的字符串和此正则相匹配，则执行对应的回调函数
/*app.get(/\/users\/(\d+)$/,function(req,res){
    var result = /\/users\/(\d+)$/.exec(req.path);
    console.log(result);
    var id = result[1];
    res.end(id);
})*/
//指定路径参数
app.get('/users/:id/:action',function(req,res){
    console.log(req.params);
    res.end(req.params.id);
});

app.listen(9090);

