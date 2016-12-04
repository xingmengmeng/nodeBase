var document = {
    //此属性里存放着所有的cookie
    cookies:[], //   ["name=zfpx","age=9"]
    set cookie(cookie){//赋值的时候执行此方法 name=zfpx2

      document.cookies.push(cookie);
    },
    get cookie(){//取值的时候执行此方法 name=zfpx; age=9
        return document.cookies.join('; ');
    }
}
//给一个对象属性赋值的时候，会找一找此对象中有没有set 属性这个方法，如果有，则立刻执行此访问，另外会把要赋值作为参数传进去
document.cookie = 'name=zfpx';
document.cookie = 'age=8';
document.cookie = 'name=zfpx2';
console.log(document.cookie);// age=8; name=zfpx2
