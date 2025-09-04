import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: 1, text: 'learning redux-toolkit', completed: false },
  { id: 2, text: 'learning linux', completed: true }
]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      const text = action.payload
      const newTodo = { id: Date.now(), text: text, completed: false }
      state.push(newTodo)
    },
    remove: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },
    update: (state, action) => {
      const { id, text } = action.payload
      const updateTodo = state.find(t => t.id === id)
      if (updateTodo) {
        updateTodo.text = text
      }
    },
    toggle: (state, action) => {
      const id = action.payload
      const todo = state.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { add, remove, update, toggle } = todoSlice.actions
export default todoSlice.reducer
