/**
 * this.props.children 表示使用当前组件时传入的子元素
 */
var Home = React.createClass({
    render(){
        return (
            <ul>
                {
                    this.props.children.map(function(item,index){
                      return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

ReactDOM.render(<Home>
    <span>老大</span>
    <span>二师兄</span>
    <span>三师弟</span>
</Home>,document.querySelector('#app'));