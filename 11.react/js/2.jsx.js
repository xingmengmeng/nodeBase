var names = ['普京','特朗普','习近平','奥巴马'];
/**
 * 1参数 有且只能有一个顶级元素 或者说只能有一个根元素
 * {} 表示里面放的是一个JS表达式,可以运行并有返回值。在此会把此返回值渲染在页面上
 */
var style = {color:'red',backgroundColor:'lightgreen'};
ReactDOM.render(<div>
    {
       names.map(function(item,index){
           return <div className="big" style={style} key={index}>{item}</div>;
       })
    }
</div>,document.getElementById('app'));