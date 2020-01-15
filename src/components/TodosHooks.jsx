import React, { useState } from "react";

const TodosHooks = () => {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, newTodo])
    setNewTodo("")
  }

  return(
    <>
      <form>
        <input type="text" name="todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <input type="button" value="ADD" onClick={addTodo} />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodosHooks
