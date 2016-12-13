/**
 * Pagination
 * Page
 */
var Pagination = React.createClass({
    render(){
        return (
            <nav>
                <ul className="pagination">

                </ul>
            </nav>
        )
    }
});
ReactDOM.render(<Pagination totalPages={5} pageNum={3}></Pagination>,document.querySelector('#app'));