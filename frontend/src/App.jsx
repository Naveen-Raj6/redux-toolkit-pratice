import { useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import Todos from './features/todos/Todos'

function App() {
  return (
    <>
      <h1 align="center">Redux ToolKit</h1>

      {/* <Counter/> */}

      <Todos/>
    </>
  )
}

export default App
