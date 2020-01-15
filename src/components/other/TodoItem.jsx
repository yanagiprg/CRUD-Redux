import React from 'react'

class TodoItem extends React.Component {
  render(){
    const id = this.props.item.id
    const name = this.props.item.name
    return(
      <li key={id}>{name}</li>
    )
  }
}

export default TodoItem