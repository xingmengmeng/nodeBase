/**
 * 使用ew6的语法定义一个组件并导出
 **/
//如果导入的时候只写名字，会去node_modules里加载  require('react')
import React from 'react';
//var React = require('react');
//这是es5中定义组件的方法
//var Panel = React.createClass({})
//这是es6中定义组件的方法
export default class Panel extends React.Component{
    render(){
        return (
            <div>hello world</div>
        )
    }
}