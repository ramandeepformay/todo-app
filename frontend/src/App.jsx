import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] =useState([])
  // fetch("http://localhost:3000/todos")
  // .then(val => val.json())
  // .then(data=>setTodos(data.todos))
  return (
    <div>
      <CreateTodo/>
      <br/>
      <Todos todos={todos}
      ></Todos>
    </div>
  )
}

export default App
