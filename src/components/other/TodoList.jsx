import React from 'react'

import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render(){
    const data = this.props.data
    if( data.length === 0 ){
      return(
        <div className="todozero">Nothing ToDo</div>
      );
    }
    // ToDoが存在する
    else{
      return(
        <ul className="todolist">{
          data.map( i => <TodoItem key={i.id} item={i} /> )
        }</ul>
      )
    }
    // return (
    //   data.length === 0 ?
    //   (<p>Nothing ToDo</p>) : (
    //   <ul>
    //     {data.map( i => 
    //       <TodoItem key={i.id} item={i} /> 
    //     )}
    //   </ul>
    //   )
    // )
  }  
}

export default TodoList