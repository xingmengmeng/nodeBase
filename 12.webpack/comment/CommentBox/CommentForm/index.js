import React,{Component} from 'react';
export default class CommentForm extends Component{
    addComment(){
        var name = this.refs.name.value;
        var content = this.refs.content.value;
        this.props.addComment({name,content});
    }
    render(){
        return (
            <form className="form-horizontal" role="form">
                <div className="form-group">
                    <label className="control-label  col-md-1" htmlFor="name">姓名</label>
                    <div className="col-md-11">
                        <input ref="name" type="text" id="name" name="name" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label  col-md-1" htmlFor="name">内容</label>
                    <div className="col-md-11">
                        <textarea ref="content" name="content" id="content" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-offset-1 col-md-11">
                        <button onClick={this.addComment} type="button"className="btn btn-primary">发言</button>
                    </div>
                </div>
            </form>
        )
    }
}