/*
function add(a){
     return function(b){
        return a+b;
     }
}
var newAdd = add(1);
console.log(newAdd(2));*/
//配置的路径
var config = '/users/:id/:action';
//客户端请求过来的url
var    url = '/users/100/view';
//需要得到这样的一个对象 {id:100,action:'view'}
var params = {};







