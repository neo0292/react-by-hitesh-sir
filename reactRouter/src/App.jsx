import { useState } from 'react'
import { Header, Footer, Home } from './components'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <><div className='bg-red-400 p-4 rounded-lg'>React Router</div>
  <Header></Header>
  <Home></Home>
  <Footer></Footer>
  </>
  )
}

export default App
