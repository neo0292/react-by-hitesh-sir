import { useState } from 'react'

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

    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() *str.length+1)
      
      
    }
  
  
  
  },[length,numAllowed,charAllowed,setPassword]);

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App