export const todoReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return { todoList: [...state.todoList, action.payload]};
    default:
      return state;
  }
}