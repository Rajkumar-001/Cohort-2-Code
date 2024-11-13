import React, { Fragment, useState } from 'react'

let cnt=5;

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Go to the GYM",
      description: "Go to the GYM today",
    },
    {
      id:2,
      title: "Have to study React",
      description: "Studied React today",
    },
    {
      id:3,
      title: "Study LinkedList today",
      description: "I have not studied it yet",
    },

    {
      id:4,
      title: "Study LinkedList today",
      description: "I have not studied it yet",
    }
  ]);



  
function addTododo(){
  setTodos([...todos,{
    id:cnt++,
    title:Math.random(),
    description:Math.random()
  }])

}


 



  return (
    <div>
      <button onClick={addTododo}>Click to add the to do</button>
      {todos.map((todo, index) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}









function Header({title}) {
  return (
    <div>
      {title}
    </div>
  )
}

function Button(){
  return (
    <button>
      Click me
    </button>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App
