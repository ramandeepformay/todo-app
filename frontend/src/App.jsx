import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  
  return (
    <div>
      <CreateTodo/>
      <br/>
      <Todos></Todos>
    </div>
  )
}

export default App