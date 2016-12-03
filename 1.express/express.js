var http = require('http');
function express(){
  //这就是请求到来的时候执行的监听函数
  var app = function(req,res){
    for(var i=0;i<app.routes.length;i++){
        //取出当前的配置对象
        var layer = app.routes[i];
        if(layer.type == 'MIDDLE'){
            layer.callback(req,res);
        }
        //如果此配置对象的方法名和请求方法相同
        else if((layer.method == 'ALL')||(layer.method == req.method)){
            if((layer.url == '*')||(layer.url == req.url)){
                layer.callback(req,res);
                break;
            }
        }
    }
  }
  //在app内部维护一个数组，存放着所有的路由规则
  app.routes = [];
  app.get = function(url,callback){
    app.routes.push({method:'GET',url:url,callback:callback});
  }
  app.use= function (callback){
      app.routes.push({type:'MIDDLE',callback:callback});
  }
  app.all = function(url,callback){
      app.routes.push({method:'ALL',url:url,callback:callback});
  }
  app.listen = function listen() {
        var server = http.createServer(this);
        return server.listen.apply(server, arguments);
  };
  return app;
}

module.exports = express;