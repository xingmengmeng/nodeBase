/**
 * 1.组件的属性用来存放那些由父组件或外界传入的，组件只能读取不能修改的数据
 * 2. Person Person.prototype = {}
 * react 单向数据流 数据通过属性可以从上往下传递，不能从下往上传
 **/
var Person = React.createClass({
    //类似一个接口文档，规定了如果别人使用此组件需要传递的参数名称和类型，以及是否必填
    propTypes:{
        //name字段必须提供，类型是字符串
        name:React.PropTypes.string.isRequired,
        gender:React.PropTypes.string.isRequired,
        country:React.PropTypes.string.isRequired
    },
    //获取默认的属性对象
    getDefaultProps(){
        return {country:'中国'};
    },
    render(){
        return (
              <div>
                  姓名:{this.props.name}<br/>
                  性别:{this.props.gender}<br/>
                  国家:{this.props.country}
              </div>
        )
    }
});
//console.dir(<Person name="张三" gender="男"/>);
//组件所有属性会封装成一个对象{name:'张三',gender:'男'}, 然后会做为 实例的props属性上
ReactDOM.render(<Person  name="张三" gender="男" country="日本"/>,document.getElementById('app'));