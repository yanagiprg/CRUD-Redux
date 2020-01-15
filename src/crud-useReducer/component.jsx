import React from "react";
import { Store } from "./store";

const TODOLIST = () => {
  const [state, dispatch] = React.useContext(Store)
  return(
    <>
      <button onClick={() => dispatch({type: 'ADD_TODO', payload: state.todo})}>ADD</button>
      <ul>
        {state.todoList.map((tl, index) =>
          <li key={index}>{tl}</li>)}
      </ul>
    </>
  )
}

export default TODOLIST