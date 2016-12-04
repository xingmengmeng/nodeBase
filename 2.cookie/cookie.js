var document = {
    //此属性里存放着所有的cookie
    cookies:[], //   ["name=zfpx","age=9"]
    //set 用来表示这个方法是用来给属性赋值的
    set cookie(cookie){//赋值的时候执行此方法 name=zfpx2
     /*1.  document.cookies = document.cookies.filter(function(item){
          return item.split('=')[0] != cookie.split('=')[0];
      });*/
      // find findIndex 是一对，
      var index =  document.cookies.findIndex(function(item){
            return item.split('=')[0] == cookie.split('=')[0];
      })
      if(index!=-1)
          document.cookies.splice(index,1);
      document.cookies.push(cookie);
    },
    // get表示这个方法是用获取属性值的
    get cookie(){//取值的时候执行此方法 name=zfpx; age=9
        return document.cookies.join('; ');
    }
}
//给一个对象属性赋值的时候，会找一找此对象中有没有set 属性这个方法，如果有，则立刻执行此访问，另外会把要赋值作为参数传进去
document.cookie = 'name=zfpx';
document.cookie = 'age=8';
document.cookie = 'name=zfpx2';
console.log(document.cookie);// age=8; name=zfpx2

var name='zfpx';
var age = 9;
var obj = {
    name,
    age,
    say(){
        console.log(this.name);
    }
}
obj.say();