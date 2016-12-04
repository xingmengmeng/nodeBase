var express = require('express');
//会话中间件
//负责把客户端在服务器对应的数据对象取出来赋给req.session
var session = require('express-session');
var app = express();
app.use(session({
    resave:true,//每次请求处理的处理都重新保存session对象
    saveUninitialized:true,//保存未初始化的session对象
    secret:'zfpx'//加密cookie
}));
app.get('/hair',function(req,res){
    //取出session对象中的money属性
    var money = req.session.money;
    if(money){//如果有值，说明以前设置过，减去10即可
        req.session.money -=10;
        res.send(`客官你还剩${req.session.money}元`);
    }else{//如果没有值，说过以前没设置这，初始化成100
        req.session.money =100;
        res.send(`客官你还剩${req.session.money}元`);
    }
});

app.listen(9090);