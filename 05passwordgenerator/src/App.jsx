import { useState,useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setLength] = useState(6)
  const [numbers , setnumbersAllowed] = useState(false)
  const [characters , setcharactersAllowed] = useState(false)
  const [Password , defaultPassword] = useState("")
  //useRef hook

  const passwordref = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str+='1234567890'
    if(characters) str+="@#$%^&!*()[]{}?/|"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() *str.length+1)
      pass += str.charAt(char) 
    }
    defaultPassword(pass);


  } , [length,numbers,characters])

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordref.current?.select()
    //passwordref.current?.setSelectionRange(0,4)// just to make sure how many char to be selected to copy
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,characters,passwordGenerator])

  
  return (
    <>
          <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className="text-white text-center">Password generator</h1>


                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                  <input
                    type="text"
                    value={Password}
                    className="outline-none w-full py-2 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordref}
                  />
                  <button id='copy'
                  onClick={copyPasswordtoClipboard }
                      className='outline-none bg-blue-700 text-white px-4 py-5 shrink-0'
                    >
                      copy
                    </button>

                    </div>
                    <div className='flex text-sm gap-x-2'>
                      <div className='flex items-center gap-x-1'>
                        <input type="range"
                        min={6}
                        max={50}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e)=>{setLength(e.target.value)}}
                        ></input>
                        <label>Length: {length}</label>
                        <div className="flex items-center gap-x-1">
                        <input 
                          type="checkbox" 
                          defaultChecked={numbers} 
                          id="numberInput" 
                          onChange={() => {
                            setnumbersAllowed((prev) => !prev);
                          }} 
                        />
                        <label htmlFor='numberInput'>Numbers</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input 
                          type="checkbox" 
                          defaultChecked={characters} 
                          id="numberInput" 
                          onChange={() => {
                            setcharactersAllowed((prev) => !prev);
                          }} 
                        />
                        <label htmlFor='CharInput'>Characters</label>
                      </div>

                      </div>
                    </div>

              </div>

   </>
  )
}

export default App
