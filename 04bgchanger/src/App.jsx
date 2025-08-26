import {useState} from 'react'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor : color}} >

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px2">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=> setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "red"}} >Red</button>
      </div>
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=> setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "green"}} >Green</button>
      </div>
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "blue"}} >Blue</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "black"}} >Black</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "yellow"}} >Yellow</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("pink")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "pink"}} >Pink</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("olive")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "olive"}} >Olive</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("gray")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "gray"}} >Gray</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("violet")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "violet"}} >Violet</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("lavender")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "lavender" , color:"black"}} >Lavender</button>
      </div>

       <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=>setColor("white")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor : "white" , color : "black"}} >White</button>
      </div>
      </div>
    </div>
  )
}

export default App
