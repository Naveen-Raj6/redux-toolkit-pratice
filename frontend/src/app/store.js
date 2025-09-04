import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todoSlice'
import quoteReducer from '../features/quote/quoteSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    quote: quoteReducer
  },
});
