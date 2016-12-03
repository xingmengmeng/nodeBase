var http = require('http');
var url = require('url');
var app = function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/'){
        res.end("首页");
    }else if(pathname == '/about'){
        res.end('关于我们');
    }else{
        res.end('未知页面');
    }
}
var server = http.createServer(app);
//在本地服务器上监听8080端口
server.listen(8080);

