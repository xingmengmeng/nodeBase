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
    handleChange(event){
        var word = event.target.value;//获取输入框的值
        //请求的真实URL https://www.baidu.com/su?cb=jQuery_1481621143705&wd=a&_=1481621143706
        //响应 jQuery_1481621143705({s:["爱奇艺","阿里巴巴批发网","acfun","安居客","阿里巴巴","阿卡丽的神秘商店","阿里云","爱奇艺网","阿里旺旺","安全教育平台"]});
        $.ajax({
            url:'https://www.baidu.com/su',
            method:'GET',
            //如果发的是get请求，那么data会转成查询字符串追加到url后面
            data:{wd:word},
            jsonp:'cb',//指定的是用来向后台传递回调函数方法名的参数名
            dataType:'jsonp',
            context:this,//用来绑定success方法中的this指针
            success(data){
                console.log(this);
                this.setState({words:data.s});
            }
        });
    },
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <input onChange={this.handleChange} type="text" className="form-control"/>
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