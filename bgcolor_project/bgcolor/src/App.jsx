import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <> <div className="h-screen w-full duration-200"
        style= {{backgroundColor: color}}>
        
    <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 py-2'>
      
      <div className='flex flex-wrap gap-3 bg-white justify-center shadow-lg rounded-3xl px-2 py-2 '>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg'
        style={{backgroundColor:"red"}}
        onClick={()=>setColor("red")}
        >Red</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg'
        style={{backgroundColor:"green"}}
        onClick={()=>setColor("green")}
        >Green</button>
        <button className='outline-none px-4 py-1 rounded-full shadow-lg'
        style={{backgroundColor:"blue"}}
        onClick={()=>setColor("blue")}
        >Blue</button>
      </div>
    
      </div>  
      </div> 
   </>
  )
}

export default App
