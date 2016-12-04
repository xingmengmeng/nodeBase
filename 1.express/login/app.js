var users = [];
var express = require('express');
var app = express();
app.get('/signup',function(req,res){
    var user = req.query;
    if(user.username){

    }else{
        res.render('signup');
    }
});
app.get('/signin',function(req,res){
   var user = req.query;
   if(user.username){
       var flag;
       for(var i=0;i<users.length;i++){
           if(users[i].username == user.username && users[i].password == user.password){
              flag = true;
              break;
           }
       }
       if(flag){
           res.redirect('/welcome');
       }else{
           res.redirect('back');
       }
   }
});
app.get('/welcome',function(){

});
app.listen(8080);