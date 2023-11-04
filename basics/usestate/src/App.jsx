import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let increase = () => {
    setCount(count+1)
  }

  let decrease = () => {
    setCount(count-1)
  }
  return (
    <>
    <div>counter value is {count}</div>
    <br />
    <button onClick={increase}>increase counter</button>
    <button onClick={decrease}>decrease counter</button>
    <br /><br />
    <div>counter value is {count}</div>
    </>
  )
}

export default App
