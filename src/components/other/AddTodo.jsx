import React from 'react'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  handleChange(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  handleClick(){
    this.props.onClick(this.state.newTodo)
    this.setState({newTodo: ""})
  }


  render(){
    return(
      <form>
        <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
        <input type="button" value="追加" onClick={this.handleClick} />        
      </form>
    )
  }
}

export default AddTodo