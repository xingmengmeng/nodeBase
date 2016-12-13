/**
 * this.props.children 表示使用当前组件时传入的子元素
 * 1.typeof 基本数据类型和引用类型 null undefined boolean string object
 * 2.instanceof 判断实例是否是一个类的实例
 * 3.Array.prototype.toString.call(obj) [object Object] [object Array]
 * 4.Array.isArray(s);
 * 5.obj.constructor == Array 判断 构造函数是否是数组构造
 * 6.obj.map?
 */
var Home = React.createClass({
    render(){
        //var children = this.props.children instanceof Array?this.props.children:[this.props.children];
        var children = this.props.children instanceof Array?this.props.children:[this.props.children];
        return (
            <ul>
                {
                    children.map(function(item,index){
                      return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

ReactDOM.render(<Home>
    <span>老大</span>

</Home>,document.querySelector('#app'));