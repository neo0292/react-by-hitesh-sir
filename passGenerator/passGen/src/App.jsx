import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() =>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*()_+?@[]{}'

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() *str.length+1)
      pass += str.charAt(char)
          
    }
    console.log('pass value:', pass)
    setPassword(pass)
   
  },[length,numAllowed,charAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator]);

  return (
    <>
    <div className='w-full max-w-md mx-auto my-8 p-4 rounded-lg text-orange-400 bg-slate-500'><h2>Password Generator</h2>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      placeholder='password'
      className='outline-none w-full py-1 px-3'
      readOnly={true}           
      />
      <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>

    </div>
    
    <div className='flex text-sm gap-x-3'>
      <div className='flex items-center gap-x-1' >
        <input 
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          id='characterInput'
          defaultChecked={charAllowed}
          onChange={()=> {
            setCharAllowed((prev)=> !prev);
          }}
         />
         <label htmlFor="charAllowed">Characters</label>
      </div>

      <div className='flex items-center gap-x-1' >
        <input 
          type="checkbox"
          id = 'numberInput'
          defaultChecked={numAllowed}
          onChange={() =>{
            setNumAllowed((prev)=>!prev); //
          }}
          />
          <label htmlFor="numAllowed">Numbers</label>
      </div>

    </div>
    </div>
    </>
  )
}

export default App
