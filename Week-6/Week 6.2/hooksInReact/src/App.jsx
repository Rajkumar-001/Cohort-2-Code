import { useState } from "react";


function App(){

  const [counter,setCounter]=useState(0);
  const [inputValue,setInputValue]=useState(1);

  let count=0;

  for (let i=0;i<=inputValue;i++){
    count+=i;
  }

  return <div>

    <input onChange={function(e){
      setInputValue(e.target.value);
    }}placeholder={"find the sum from 1 to n"}></input>
    <br>
    </br>
    <div>Sum from 1 to {inputValue} is {count}</div>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>counter({counter})</button>


  </div>






}


export default App
