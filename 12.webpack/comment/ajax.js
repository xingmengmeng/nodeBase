const COMMENTS = 'COMMENTS';
var $ = require('jquery');
module.exports = {
  //增加一条新的留言
  add(comment,callback){
      $.post('http://localhost:9090/comments',comment).done(function(data){
          callback(data);
      });
  },
  //移除一个留言
  delete(id,callback){
        $.ajax({
            url:'http://localhost:9090/comments/'+id,
            method:'DELETE'
        }).then(function(data){
            callback(data);
        });
  },
  //查询所有留言 如果有，则转成对象数组，如果没有则返回空数组
  // localStorage只能存放字符串
  query(callback){
    return $.get('http://localhost:9090/comments').then(function(data){
        callback(data);
    });
  }
}