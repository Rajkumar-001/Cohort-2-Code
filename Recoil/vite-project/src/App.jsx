import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom,evenSelector } from "./store/atoms/count"



function App() {

  return (
    <div>
      <RecoilRoot><Count/></RecoilRoot>
      </div>

  )
}



function Count(){
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}

function CountRenderer(){
  const count=useRecoilValue(countAtom)

  return <div>
    <b>{count}</b>

    <EvenCountRenderer/>
  </div>

}


function EvenCountRenderer(){
  const count=useRecoilValue(evenSelector)

  return <div>
    {count%2==0 ?(
      <p>{count} is even</p>
    ):(
      <p></p>
    )}

    
  </div>

 
}

function Buttons(){

  const [count,setCount]=useRecoilState(countAtom)

  return (
    <div>
      <button onClick={()=>{
        // Increment logic here
        setCount(count+1);

      }}>Increment</button>

      <button onClick={()=>{
        // Decrement logic here
        setCount(count-1);
      }}>Decrement</button>

      <button onClick={()=>{
        // Reset logic here
        setCount(0);
      }
      }>Reset</button>


      
    </div>
  )
 
}



export default App
