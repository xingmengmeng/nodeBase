/**
 * 1. 自定义组件首字母要大写
 * 2. render 方法的返回值 有且只能有一个顶级标签(元素)
 * @type {*}
 */
var MessageBox = React.createClass({
    /**
     * 这是一个自定义组件最重要方法
     * 它表示使用此组件的时候此组件将要被如何渲染
     */
   render(){
       return <div>hello</div>;
   }
});

ReactDOM.render(<MessageBox></MessageBox>,document.getElementById('app'))