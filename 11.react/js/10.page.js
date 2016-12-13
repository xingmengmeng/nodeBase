/**
 * 1. 属性中的totalPages等于几，就迭代出几个页码
 * 2. pageNum对应的页码高亮显示
 * 3. 点击哪个页码，哪个页码高亮
 * 4. 如果当前页是第一页，上一页按钮不显示，如果当前页是最后一页，则下一页按钮不显示
 */
var Pagination = React.createClass({
    getInitialState(){
        //从属性初始化一下状态
      return {pageNum:this.props.pageNum};
    },
    handleClick(event){
        var str = event.target.innerHTML;
        if(!isNaN(str)){
            this.setState({pageNum:parseInt(str)});
        }else if('上一页'==str){
            this.setState({pageNum:this.state.pageNum-1});
        }else if('下一页'==str){
            this.setState({pageNum:this.state.pageNum+1});
        }

    },
    render(){
        var pages = [];
        if(this.state.pageNum>1){
            pages.push(<li><a href="#">上一页</a></li>);
        }
        for(var i=1;i<=this.props.totalPages;i++){
            pages.push(<li className={i == this.state.pageNum?'active':''}><a href="#">{i}</a></li>);
        }
        if(this.state.pageNum<this.props.totalPages){
            pages.push(<li><a href="#">下一页</a></li>);
        }
        return (
            <nav>
                <ul className="pagination" onClick={this.handleClick}>
                    {
                        pages
                    }
                </ul>
            </nav>
        )
    }
});
ReactDOM.render(<Pagination totalPages={5} pageNum={2}></Pagination>,document.querySelector('#app'));