import React from 'react'

class TodosRedux extends React.Component{
  state = {
    todo: ''
  }
  render(){
    const list = this.props.todo.todoList.map((todo, index) => 
    <li key={index}>{todo}</li>
    )
    return(
      <>
        <input type="text" onChange={e => this.setState({todo: e.target.value})} />
        <button onClick={() => this.props.addTodo(this.state.todo)}>ADD</button><br />
        <ul>
          {list}
        </ul>
      </>
    )
  }
}

export default TodosRedux