const COMMENTS = 'COMMENTS';
module.exports = {
  //增加一条新的留言
  add(comment){
      comment.id = ""+Date.now();
      comment.createAt = new Date();
      var comments = this.query();
      comments.push(comment);
      localStorage.setItem(COMMENTS,JSON.stringify(comments));
      return comments;
  },
  //移除一个留言
  delete(id){
      var comments = this.query();
      comments = comments.filter(function(item){
          return item.id != id;
      });
      localStorage.setItem(COMMENTS,JSON.stringify(comments));
      return comments;
  },
  //查询所有留言 如果有，则转成对象数组，如果没有则返回空数组
  // localStorage只能存放字符串
  query(){
      var str = localStorage.getItem(COMMENTS);
      return str?JSON.parse(str):[];
  }
}