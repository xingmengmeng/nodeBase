var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/comments');

var CommentSchema = new mongoose.Schema({
  name:String,
  content:String,
  createAt:{type:Date}
},{collection:'comment'});

exports.Comment = mongoose.model('Comment',CommentSchema);