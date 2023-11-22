import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{id: 1, text:'Hello Todo' }]
};

export const todoSlice = createSlice({
  name : 'todo',
  initialState,
  reducers: {
    addTodo: (state,action) => {
     const  todo=  {id: nanoid(), text:action.payload }
     state.todos.push(todo)

    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload )
    }
  }
})

//export reducers to use in components
export const {addTodo, removeTodo} = todoSlice.actions

//export slice to use in store
export default todoSlice.reducer


