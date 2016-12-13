var Counter = React.createClass({
  getInitialState(){
      return {count:0};
  },
  handleClick(){
     this.setState({count:this.state.count + 1});
  },
  render(){
      return (
          <div>
            <p>{this.state.count}</p>
             <button onClick={this.handleClick}>加1</button>
          </div>
      )
  }
});
ReactDOM.render(<Counter></Counter>,document.getElementById('app'));