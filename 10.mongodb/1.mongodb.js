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

PersonModel.create({
    name:'张三',
    age:'a',
    birthday:new Date(),
    home:'北京'
},function(err,doc){
    console.log(err);
});

