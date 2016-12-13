var express = require('express');
var app = express();
//   /su?cb=jQuery_1481621143705&wd=a&_=1481621143706

app.get('/su',function(req,res){
   var wd = req.query.wd;
   var cb = req.query.cb;
   var s = [];
   for(var i=0;i<10;i++){
       s.push(wd+i);
   }
    //jQuery_1481621143705({s:["爱奇艺","阿里巴巴批发网","acfun","安居客","阿里巴巴","阿卡丽的神秘商店","阿里云","爱奇艺网","阿里旺旺","安全教育平台"]});
   res.send(`${cb}(${JSON.stringify({s})})`);

});
app.listen(3000);