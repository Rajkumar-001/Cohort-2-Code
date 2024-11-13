import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const words=["hi","my","name","is","for","to","random","word"];
const total_lines=1000;
const all_words=[];

for (let i=0;i<total_lines;i++){
  let sentence="";
  for (let j=0;j<words.length;j++){
    sentence+=(words[Math.floor(words.length*Math.random())])
    sentence+=" "; 



  }
  all_words.push(sentence);
}

function App() {

  const [sentences,setSentences]=useState(all_words);
  const [filter,setFilter]=useState("");
  const filteredSentences=sentences.filter(x=>x.includes(filter));



  return <div>
    {sentences.map(word=><div>{word} </div>)}
    

  </div>


  
}

export default App
