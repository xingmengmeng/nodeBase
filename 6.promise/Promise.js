function Promise(task){
    this._status = '初始态';
    //调用resolve会把状态改变成成功态
    var resolve = data => {
        this._status = '成功态';
        this._success(data);
    }
    //调用reject会把状态改变成失败态
    var reject = error =>{
        this._status = '失败态';
        this._fail(error);
    }
    task(resolve,reject);
}
Promise.prototype.then = function(success,fail){
  this._success = success;
  this._fail = fail;
}
module.exports =  Promise;