/**
 * 1. 在组件内定义一个状态 {comments:[]},把这个 comments渲染到ul内部
 * 2. 给button绑定点击事件，事件发生时取得input框的值，修改状态，状态修改后可以重新渲染页面
 *  this.state.comments.push(xxx);
 *  this.setState({comments:this.state.comments});
 * 3.删除功能
 * @type {*}
 */
var Comment = React.createClass({
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <ul className="list-group">

                    </ul>
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-md-11">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary">留言</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Comment/>,document.querySelector('#app'));