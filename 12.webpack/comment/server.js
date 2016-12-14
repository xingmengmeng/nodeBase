var express = require('express');
var bodyParser = require('body-parser');
var Comment = require('./db').Comment;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})
//增加留言
app.post('/comments',function(req,res){
  var comment = req.body;
  Comment.create(comment,function(err,doc){
      Comment.find({},function(err,docs){
          res.send(docs);
      });
  })
});
//删除一条留言
app.delete('/comments',function(req,res){

});
//获取所有的留言
app.get('/comments',function(req,res){
    Comment.find({},function(err,docs){
        res.send(docs);
    });
});


app.listen(9090);