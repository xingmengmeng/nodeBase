var Input = React.createClass({
  getInitialState(){
    return {val:'请输入...'};
  },
  handleChange(event){
    this.setState({val:event.target.value})
  },
  render(){
      return (
          <div>
              <input type="text" onChange={this.handleChange} value={this.state.val}/>
              <p>{this.state.val}</p>
          </div>
      )
  }
});
ReactDOM.render(<Input/>,document.querySelector('#app'));