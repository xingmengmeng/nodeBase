/**
 * 并行执行
 */
var async = require('async');
async.parallel([
    function(callback){
      setTimeout(function(){
        callback(null,'男生一号');
      },5000);
    },
    function(callback){
        setTimeout(function(){
            callback(null,'女生一号');
        },2000);
    }
],function(err,result){
    var boy = '女生一号';
    var girl = '男生一号';
});
