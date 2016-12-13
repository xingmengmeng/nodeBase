/**
 * 1.为组件增加一个ref属性，则可以通过 this.refs.属性名获取到此DOM元素
 * @type {*}
 */
var Focus = React.createClass({
    getFocus(event){
        this.refs.myText.focus();
    },
    render(){
        return (
            <div>
                <input ref="myText" type="text"/>
                <button onClick={this.getFocus}>获得焦点</button>
            </div>
        )
    }
});
ReactDOM.render(<Focus></Focus>,document.querySelector('#app'));