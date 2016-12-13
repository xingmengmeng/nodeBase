var Suggest = React.createClass({
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item">1234567890</li>
                    </ul>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Suggest/>,document.querySelector('#app'));