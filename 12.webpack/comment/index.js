require('bootstrap/dist/css/bootstrap.css');
import CommentBox from './CommentBox';
import React from 'react';
import ReactDOM from 'react-dom';
//这是一个工具模块，用来实现将数据保存在localStorage里
var store = require('./server');
ReactDOM.render(<CommentBox store={store}/>,document.getElementById('app'))