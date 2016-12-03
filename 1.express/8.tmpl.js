var express = require('express');
var path = require('path');
var app = express();
var users = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
//设置模板引擎
app.set('view engine','ejs');
//设置模板的存放目录
app.set('views',path.resolve('./views'));
/**
 * 模板引擎用于把静态的模板内容和数据对象进行渲染得到HTML送发送给客户端
 */
app.get('/',function(req,res){
  //1 参数是模板的相对路径 2 参数是数据对象
  res.render('user',{users:users});
});

app.listen(9090);