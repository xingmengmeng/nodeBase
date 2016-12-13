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
       console.log('render');
       return <div>hello</div>;
   }
});
//只有在render的时候，才会创建一个自定组件的实例，并且调用它的render方法，得到返回的虚拟DOM，再成真实DOM插入DOM容器
ReactDOM.render(<MessageBox></MessageBox>,document.getElementById('app'))
