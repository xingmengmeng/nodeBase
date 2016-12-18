var mongoose = require('mongoose');
//2. 连接mongodb数据库 数据库一定要先启动
mongoose.connect('mongodb://127.0.0.1/movie');
//3. 定义schema
var MovieSchema = new mongoose.Schema({
    name:String,
    url:String
    //指定保存到数据库里的集合名称，如果不指定则叫movies
},{collection:'movie'});
//4.定义模型
var Movie = mongoose.model('Movie',MovieSchema);
exports.Movie = Movie;