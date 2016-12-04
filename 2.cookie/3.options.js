var express = require('express');
/**
 * -g 全局 在命令中使用
 *  本地  在代码中require
 */
var cookieParser = require('cookie-parser');
var app = express();
//基本上所有的中间件模板都是一个函数,都要调用一下才能放在use里
app.use(cookieParser());
app.get('/write',function(req,res){
    //设置此cookie属性哪个域名所有。
  //res.cookie('name','zfpx',{domain:'.zfpx.cn'});
    //设置此cookie属于哪个路径，只有向此路径发请求才会发送此cookie
  //res.cookie('name','zfpx',{path:'/read1'});
   // 设置cookie的有效期，在有效期内 可以读取，过了有效期，则浏览器删除此cookie
    //res.cookie('name','zfpx',{maxAge:10*1000});
    //指定一个绝对时间，指向当前的10秒后
    res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
  res.send('ok');
});
app.get('/read1',function(req,res){
  res.send(req.cookies);
});
app.get('/read2',function(req,res){
    res.send(req.cookies);
});

app.listen(8080);