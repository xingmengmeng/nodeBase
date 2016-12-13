/**
 * 1. 框架 则意味着我们只要按规定写好就可以，框架会自动调我们的调用
 * 2. 库 则意味着我们要调用它的代码
 * react.js window.React
 * react-dom.js window.ReactDOM
 *
 */
//把这个DOM片断放置在app容器的内部
function render(domObj,ele) {
    var h1 = document.createElement(domObj.tagName);
    h1.innerHTML = domObj.text;
    ele.appendChild(h1);
}
/**
 * 1. jsx=js+xml混合写法 ，浏览器不能识别,需要转义
 * 转义成真正的js代码
 * 2.此处的xml写的是虚拟DOM,真正渲染的时候并不是直接把它转成字符串放在app内部。而是转成一个JS数据结构
 * 3.在渲染的时候会根据这个数据结构渲染出真正的DOM元素放到容器的内部
 */
render({tagName:'h1',text:'hello',attr:{key:1},style:style},document.getElementById('app'));