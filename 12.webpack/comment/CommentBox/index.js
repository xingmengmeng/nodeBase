// react 导出对象和默认导出对象都是React
import React,{Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
export default class CommentBox extends Component{
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="text-center">欢迎来到珠峰留言板</h3>
                </div>
                <div className="panel-body">
                    <CommentList></CommentList>
                </div>
                <div className="panel-footer">
                    <CommentForm></CommentForm>
                </div>
            </div>
        )
    }
}