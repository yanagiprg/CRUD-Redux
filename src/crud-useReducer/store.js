import * as React from 'react'
import { todoReducer } from "./reducers";

const initialState = {
  todoList: [],
}

export const Store = React.createContext(initialState)

export const StoreProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(todoReducer, initialState)
  return (
    <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
  )
}