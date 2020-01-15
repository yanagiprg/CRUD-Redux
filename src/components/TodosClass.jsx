import React from 'react'


class TodosClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: "",
      todos: [],
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
    const id = this.state.id
    const todos = this.state.todos
    todos.push({
      id: id, title: this.state.newTodo, content: this.state.newTodo,
    })
    this.setState({  
      newTodo: "",
      todos: todos,
    })
  }

  render(){
    const list = this.state.todos.map(todo => 
      <li key={todo.id}>{todo.title}: {todo.content}</li>
    )
      
    return(
      <div>
        <form>
          <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
          <input type="button" value="ADD" onClick={this.handleClick} />
        </form>
        <ul>
          {list}
        </ul>
      </div>
      
    )
  }
}
export default TodosClass