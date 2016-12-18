var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var read = require('./read');
var write = require('./write');
var async = require('async');
var Movie = require('./db').Movie;
async.waterfall([
    function(cb){
        //清空原有的集合
        Movie.remove({},cb);
    },
    function(data,cb){
        //读取所有的电影列表
       read(url,function(err,movies){
           cb(err,movies);
       });
    },
    function(movies,cb){
        //保存所有的电影列表
        write(movies,cb);
    }
],function(err,result){
    console.log('全部处理完毕');
});

