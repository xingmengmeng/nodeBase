//加载mongoose模块
var mongoose = require('mongoose');
//连接数据库    协议名://IP或域名/数据库名字
mongoose.connect('mongodb://127.0.0.1/201610node');
//先创建集合骨架模型 规定一个集合中文档的字段名称和类型
//规定了存储的时候对象的能存的字段的名称，多余字段会忽略
//规定了存储的时候对象的字段类型，如果不匹配会先尝试类型转换一下，如果转换成功则继续保存，如果转换失败则报错退出
var PersonSchema = new mongoose.Schema({
    name:String, //姓名
    age:Number, //年龄
    birthday:Date //生日
},{collection:'person'})//指定了集合的名称

//定义操作数据库的模型 它有一些方法可以操作数据库
var PersonModel = mongoose.model('Person',PersonSchema);
//增加数据 保存对象
/*var persons = [];
for(var i=1;i<=10;i++){
  persons.push({name:'zfpx'+i,age:i});
}
PersonModel.create(persons,function(err,docs){
    console.log(docs);
});*/
//第一个参数是一个对象，存放着要删除的条件
//  会删除所有匹配到的记录
//
/*PersonModel.remove({age:8,name:'zfpx8'},function(err,result){
    console.log(result);
    // ok 1 表示操作成功，n 表示删除的数据量，记录
    // result: { ok: 1, n: 1 },
});*/
/**
 * 1. 更新的条件
 * 2. 要把数据更新成什么样子 更新后的数据
 * 3. 更新的时候，如果匹配到的条数多于一条，只会更新第一条
 * 4. multi表示如果匹配到多条，那么有几条更新几条
 */
/*
PersonModel.update({age:2,name:'zfpx2'},{
  birthday:new Date()
},{multi:true},function(err,result){
    //{ ok: 1, nModified: 0, n: 0 }
    // ok=1表示更新成功 nModified 被修改的条数  n准备要修改的条数
  console.log(result);
});
*/
// name=zfpx4或age5 {$or:[{name:'zfpx4'},{age:5}]}
/*PersonModel.find({$or:[{name:'zfpx4'},{age:5}]},function(err,docs){
    console.log(docs);
});*/

//属性过滤，只返回需要的字段
//第二个参数 可以写包含的字段或排除的字段 name表示字段名， 1要返回
//BadValue Projection cannot have a mix of inclusion and exclusion.
/*PersonModel.find({},{name:0},function(err,docs){
    console.  log(docs);
});*/

//findOne找到一条后就返回，不再继续查找了
/*
PersonModel.findOne({_id:'584b866c531c90e19e3f0d8e'},function(err,doc){
    console.log(doc);
});

PersonModel.findById('584b866c531c90e19e3f0d8e',function(err,doc){
    console.log(doc);
});*/
/**
 * 更新后的值可以
 * $set 直接指定更新后的值
 * $inc 在原有的基础上递增
 */
/*
PersonModel.update({name:'zfpx1'},{
    $set:{age:100}
},function(err,result){
    console.log(err);
    console.log(result);
});*/

/**
 * 复杂查询 分页查询
 *  一共10条数据
 *  每页3条，要查询第2页的数据
 */
//每页的条数
var pageSize = 3;
//要取第几页的数据
var pageNum = 3;
//skip跳过指定的条件 exec表示执行此查询
// age 1 表示正序排列 age -1 表示倒叙排列
PersonModel.find().skip(pageSize*(pageNum-1)).limit(pageSize).sort({
    age:-1
}).exec(function(err,docs){
  console.log(docs);
});
