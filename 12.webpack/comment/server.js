var express = require('express');
var bodyParser = require('body-parser');
var Comment = require('./db').Comment;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
    next();
})
//增加留言
app.post('/comments',function(req,res){
  var comment = req.body;
  comment.createAt = new Date();
  Comment.create(comment,function(err,doc){
      Comment.find({},function(err,docs){
          res.send(docs);
      });
  })
});
//删除一条留言
app.delete('/comments/:id',function(req,res){
     var id = req.params.id;
    Comment.remove({_id:id},function(err,result){
        Comment.find({},function(err,docs){
            res.send(docs);
        });
    });
});
//获取所有的留言
app.get('/comments',function(req,res){
    Comment.find({},function(err,docs){
        res.send(docs);
    });
});


app.listen(9090);