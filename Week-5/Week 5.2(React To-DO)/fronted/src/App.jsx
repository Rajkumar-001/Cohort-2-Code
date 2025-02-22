import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CreateTodos } from './Components/CreateTodo';
import { Todos } from './Components/Todos';



function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todo")
  .then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    
      <div>
        <CreateTodos></CreateTodos>
        <Todos todos={todos}></Todos>
        
      </div>
      
   
  )
}

export default App
