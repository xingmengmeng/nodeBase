var fs = require('fs');
module.exports = function (filename) {
    //创建一个promise实例并返回
    //构造函数需要一个函数参数，此函数参数会立刻执行。里面会开启一个异步任务，如果任务成功了，调用resolve方法使promise实例状态变成完成态，如果任务失败了，调用reject使promise实例状态变成失败态
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);//调用reject状态变成失败态并调用失败回调函数
            } else {
                resolve(data);//调用resolve方法变成功态并调用成功回调函数
            }
        })
    });
}