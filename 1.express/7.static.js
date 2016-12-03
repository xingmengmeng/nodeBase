var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
// 一个中间件来响应所有的静态文件请求
//此中间件接收到客户端的请求后，会先去public目录下找一下有没有这个文件，如果有这个文件，读出来返回客户端，如果没有这个文件，调用next
app.use(function(req,res,next){
    //req.path;// /imgs/baidu.png
    fs.exists('./public'+req.path,function(exists){
        if(exists){
            res.sendFile(path.resolve('./public'+req.path));
        }else{
            next();
        }
    })
});
//使用静态文件中间件，并指定静态文件根目录
app.use(express.static(path.resolve('./public')));

app.get('/index.html',function(req,res){
    //fs.createReadStream('./public/index.html').pipe(res);
    // path must be absolute or specify root to res.sendFile
    //如果路径是一个相对路径，那么需要指定root参数表示是相对于哪个绝对路径的相对路径
   // res.sendFile('./public/index.html',{root:__dirname});
    //resolve可以把一个相对路径转成绝对路径
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(9090);