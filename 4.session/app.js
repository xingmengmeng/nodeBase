var app = require('express')();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
const SESSION_KEY = 'connect.sid';
//会话对象，存放着所有的卡号和对应的余额
var SESSIONS = {};
app.get('/cut',function(req,res){
    var oldVipId = req.cookies[SESSION_KEY];
    if(oldVipId){
        //sessionObj 就是此客户端 在服务器存储数据对象
        var sessionObj = SESSIONS[oldVipId];
        if(sessionObj){
            sessionObj.money -= 10;
            if(sessionObj.money<=0){
                banKa();
            }else{
                res.send(`老顾客欢迎下次光临，你还剩${sessionObj.money}`);
            }

        }else{
            banKa();
        }
    }else{
        banKa();
    }

    function banKa(){
        //老板编一个卡号
        var vipid  = ''+Date.now()+Math.random();
        //记录vipid和它的会话对象，其实就是此卡号在服务器端的对象明细
        SESSIONS[vipid] = {money:100};
        res.cookie(SESSION_KEY,vipid);
        res.send('欢迎你顾客，送你一张价格100元的理发卡');
    }
});


app.listen(8080);