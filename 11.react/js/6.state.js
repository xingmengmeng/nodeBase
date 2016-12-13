/**
 * 1. 状态只能由组件内部初始化
 * 2. 在跟用户的互动中，状态可能会发生变化，状态发生变化之后，会重新触发页面的渲染
 * 3.当调用setState方法的时候会传入一个对象，如果原来有这个属性，则覆盖原来的值，如果原来没有此属性，则添加此属性。如果原来有属性但setState没有传此属性，那么保持不变
 */
var Person = React.createClass({
    //定义初始化初始状态对象
    getInitialState(){
      return {happy:true,balance:0.8};
    },//处理点击事件
    handleClick(){
        //设置新的状态对象
       this.setState({happy:!this.state.happy});
    },
    render(){
        var text = this.state.happy?'开心':'不开心';
        return (
            <div>
                <p>{text}:{this.state.balance}</p>
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
});
ReactDOM.render(<Person/>,document.querySelector('#app'));