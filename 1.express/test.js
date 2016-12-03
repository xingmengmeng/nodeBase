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
//var config = '/users/(\w+)/(\w+)';
//缓存一个包含params属性名的一个数组
var names = [];// ['id','action']
//把所有的 :点位符进行替换,(\\w+)
config =  config.replace(/:(\w+)/g,function(matched,group1){
   names.push(group1);
   //console.log(arguments);
   return '(\\w+)';
});
console.log(config); //  /users/(w+)/(w+)
//转成正则表达式
var reg = new RegExp(config);
//捕获字符串里的内容
var result = reg.exec(url);

for(var i=0;i<names.length;i++){
    params[names[i]] = result[i+1];
}
console.log(params);







