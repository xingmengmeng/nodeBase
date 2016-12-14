// react 导出对象和默认导出对象都是React
import React,{Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
export default class CommentBox extends Component{
    //props 代表当前组件的属性对象
    constructor(props){
        super(props);
        this.state = {comments:[]};
        // 在es6中使用此方法初始化一个状态对象
        this.props.store.query((comments)=>{
            this.setState({comments});
        });
    }
    //向状态 comments里增加一个新的对象
    //在es6中，组件方法里的this默认向指定null
    addComment(comment){
       this.props.store.add(comment,(comments)=>{
           this.setState({comments});
       });

    }
    //删除留言
    deleteComment(id){
        var comments = this.props.store.delete(id);
        this.setState({comments});
    }
    //在es6中，render里的this指向的是当前组件的实例
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="text-center">欢迎来到珠峰留言板</h3>
                </div>
                <div className="panel-body">
                    <CommentList deleteComment={this.deleteComment.bind(this)} comments={this.state.comments}></CommentList>
                </div>
                <div className="panel-footer">
                    <CommentForm addComment={this.addComment.bind(this)}></CommentForm>
                </div>
            </div>
        )
    }
}