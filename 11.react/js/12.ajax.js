/**
 * 1. 为input框绑定onChange事件，当改变后向百度的接口发起ajax调用
 * 2. 向百度接口https://www.baidu.com/su?wd=b&cb=xxx发起调用
 * 3. 取得返回对象的s属性，是一个关键字字符串数组
 * 4. 把此数组转成li数组显示在ul里
 * @type {*}
 */
var Suggest = React.createClass({
    getInitialState(){
      return {words:[]};//["baidu","bt"]
    },
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map(function(item,index){
                              return   <li key={index} className="list-group-item">{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Suggest/>,document.querySelector('#app'));