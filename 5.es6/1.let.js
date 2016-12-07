/*
/!**
 * 以前只有函数才能形成私有作用域
 * 模块化 ES6的模块
 *!/
let a = 20;
if(true){
    let a = 10;
}
console.log(a);

~function(){
    var name = 'zfpx';
   console.log(name);
}()
//闭包的新写法
{
    let name = 'zfpx';
    console.log(name);
}

*/
// 9 12 6 3
/*for(var i=0;i<3;i++){
    for(var i=0;i<3;i++){
        console.log(i);
    }
}*/

/*for(let i=0;i<3;i++){
    for(let i=0;i<3;i++){
        console.log(i);
    }
}*/
//let没有预解释,但当前作用域内如果有声明的话，则会摈弃上级作用域内的变量
let num = 10;
{
    console.log(num);
    let num = 20;
}

