import { useState } from 'react'
import { InputBox } from './components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='text-orange-300 bg-slate-500'>currency convertor</h1>
   <InputBox></InputBox>
   </>
  )
}

export default App
