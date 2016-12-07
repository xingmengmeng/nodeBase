var names = [1, 2, 3];
/*
 var a = names[0];
 var b = names[1];
 var c = names[2];
 */
/*
 [,c,] = names;
 console.log(c);

 var person = {name:'zfpx',age:8,home:{
 province:'广东',
 city:'东莞'
 }};
 //左边是对象的属性名，右边是局部变量名
 var {name:name1,age:age1} = person;
 console.log(name1,age1);
 //通过解构赋值的方式取出province和city*/
var person = {name: 'zfpx',
    address: {province: '江苏', city: '南京'}};
var {name, address:{province, city}}=person
console.log(name, province, city);
/**
 * 1. 取出一一取出所有属性
 * 2. 如果属性值不合法,比如必填没有给要报错
 * 3. 如果属性值可有可无，需要给默认值
 * @param options
 */
/*function ajax(options){
    var url = options.url;
    if(!url) throw Error('url不能为空');
    var method = options.method?options.method:'GET';
    var data = options.data?options.data:{};
    var dataType = options.dataType?options.dataType:'json';
}*/
function ajax({url=new Error('url不能为空'),method='GET',data={},dataType='json'}){
    console.log(url,method,data,dataType);
}
ajax({
    url:'http://localhost/users'
   /* method:'GET',
    data:{},
    dataType:'json'*/
});


