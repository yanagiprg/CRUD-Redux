import { createStore as reduxCreateStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/index";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
    }),
  )
  return store
}