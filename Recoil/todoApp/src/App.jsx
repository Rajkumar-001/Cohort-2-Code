import { useState } from "react";
import {RecoilRoot} from "recoil";


function App() {

  // const [todos,setTodos]=useState([]);
  // const [description,setDescription]=useState("");
  // const [details,setDetails]=useState("");

  // const handleAddTodo=()=>{

  //   const newTodo={description,details};
  //   setTodos([...todos,newTodo]);
  //   setDescription("");
  //   setDetails("");

  // }




  //   return (
  
  //   <div>


  //     <h1>Todo App</h1>
  //     <input type="text" placeholder="Description" value={description} onChange={(e)=>{
  //       setDescription(e.target.value);
  //     }}></input>
  //     <input type="text" placeholder="Details" value={details} onChange={(e)=>{
  //       setDetails(e.target.value);
  //     }}></input> 
  //     <button onClick={handleAddTodo}>Add</button>

  //     <div>
  //     <h2>Todo List</h2>
  //     <ul>
  //       {todos.map((todo,index)=>(
  //         <li key={index}>
  //           <h3>{todo.description}</h3>
  //           <p>{todo.details}</p>
  //         </li>
  //       ))} 
  //     </ul>

  //     </div>


  //     </div>
       

    // )

    return (
        <div>
          <RecoilRoot>
          <Todos/>
          </RecoilRoot>

        </div>
    )


}




function Todos(){


  return (
    <div>
      <input type="text" placeholder="Description" onChange={(e)=>{
        setValue(e.target.value);

      }}></input>
      <input type="text" placeholder="Details" onChange={(e)=>{
        setValue(e.target.value);
      }}></input>
      <button>Add</button>
    </div>
  )

}










 export default App;