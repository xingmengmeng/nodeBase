var express = require('express');
var app = express();
//增加留言
app.post('/comments',function(req,res){

});
//删除一条留言
app.delete('/comments',function(req,res){

});
//获取所有的留言
app.get('/comments',function(req,res){

});


app.listen(9090);