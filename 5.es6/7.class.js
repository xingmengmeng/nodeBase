function Person(name){
  this.name = name;
}
Person.prototype.getName = function(){
    console.log(this.name);
}
function Student(name,age){
    //继承父类的私有属性
    Person.call(this);
}
Object.create = function(proto){
  var Factory = function(){};
  Factory.prototype = proto;
  return new Factory();
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s1 = new Student('zfpx',8);



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
class Student extends Person{
    constructor(name,age){
        super(name);//super指的是父类的构造函数 Person.constructor
        this.age = age;
    }
    getAge(){
        console.log(this.age);
    }
}
var s1 = new Student('zfpx','8');
s1.getName();
s1.getAge();

