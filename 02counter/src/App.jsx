import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [counter , setCounter] = useState(10)

  function addValue(){
    if(counter<20) {
      console.log("Value Added",counter)
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
      setCounter((prevCounter)=> prevCounter+1)
      
    }
    else{
      console.log("Already the Counter limit 20 is exceeded");
      
    }
    
  }
  function removeValue(){
    if(counter>0) {
      setCounter(counter-1);
      console.log("Value Removed",counter);
    }
    else{ 
      console.log("Already the Counter is 0");
    }
    
  }
  return (
    <>
    
      <h1>Chai aur React</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br><br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
