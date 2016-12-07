/**
 箭头函数
 箭头左边是参数，右边是返回值
 当有且只有一个参数的时候
 **/
/*
var double = n => n*2;
console.log(double(5));
// 有零个或多个参数时参数列表需要用小括号包裹
var getName = () => 'zfpx';
var add = (a,b)=>a+b;*/
// {}是表示函数体
var log = (name)=> {
    return {name:name};
};
console.log(log('123'));

//箭头函数没有自己的this指针，它的this 指向上级作用域的this
var person = {
    name:'zfpx',
    getName:function(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}
var g = person.getName;
g();

