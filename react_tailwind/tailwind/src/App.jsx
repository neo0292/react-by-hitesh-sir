import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='bg-green-500 text-black rounded-xl p-4 mb-4'><h1>hello Tailwind</h1></div>

   <Card></Card>

  

   
   </>
  )
}

export default App
