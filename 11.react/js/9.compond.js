var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-default">
                <PanelHead content={this.props.head}></PanelHead>
                <PanelBody content={this.props.body}></PanelBody>
                <PanelFooter>{this.props.footer}</PanelFooter>
            </div>
        )
    }
});
var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                {this.props.content}
            </div>
        )
    }
});
var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.content}
            </div>
        )
    }
});


var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                {this.props.children}
            </div>
        )
    }
});

ReactDOM.render(<Panel head="头" body="体" footer="尾"></Panel>,document.querySelector('#app'));
