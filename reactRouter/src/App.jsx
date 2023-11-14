import { useState } from 'react'
import { Header } from './components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <><div className='bg-red-400 p-4 rounded-lg'>React Router</div>
  <Header></Header>
  </>
  )
}

export default App
