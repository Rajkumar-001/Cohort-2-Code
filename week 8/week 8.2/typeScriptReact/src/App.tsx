
function App() {
 

  return (
    <>
    <h1>Todo App</h1>
    <Todo title="Learn React" description="Learn React" completed={false}/>
      
    </>
  )
}


interface TodoProp{
  title:string,
  description:string,
  completed:boolean

}

function Todo(props:TodoProp){

  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    <h3>{props.completed}</h3>
  </div>



}

export default App
