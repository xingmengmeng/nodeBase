var express = require('express');
var app = express();
var users = [{"id":1,"name":"zfpx"},{"id":2,name:"zfpx2"}];
app.get('/users',function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(users);
});
app.listen(3000);
