import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from '../components/cards'

let myObj = {
  name:"Saikumar reddy",
  age: 22
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Cards username={"Saikumar Reddy"} obj={myObj}/>   
    </>
  )
}

export default App
