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