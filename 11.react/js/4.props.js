/**
 * 1.组件的属性用来存放那些由父组件或外界传入的，组件只能读取不能修改的数据
 * 2. Person Person.prototype = {}
 **/
var Person = React.createClass({
    render(){
        return (
              <div>
                  姓名{this.props.name}
                  性别{this.props.gender}
              </div>
        )
    }
});
//console.dir(<Person name="张三" gender="男"/>);
//组件所有属性会封装成一个对象{name:'张三',gender:'男'}, 然后会做为 实例的props属性上
ReactDOM.render(<Person name="张三" gender="男"/>,document.getElementById('app'));