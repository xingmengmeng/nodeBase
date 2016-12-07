function Person(name){
  this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}

class Person{
  //构造函数，创建实例的时候自动会调用的函数
  //传递给类的参数会传递给构造函数
  constructor(name){
      this.name = name;
  }
  getName(){
      console.log(this.name);
  }
}
/*var p1 = new Person('zfpx');
p1.getName();*/

