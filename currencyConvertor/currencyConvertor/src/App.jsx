import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  // call custom hook with argument 'from' variable 
  const currencyInfo = useCurrencyInfo(from) 

  const options = Object.keys(currencyInfo)

  const swap =() => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
  setConvertedAmount(amount*currencyInfo[to])
  }

  
  return (
   <>
   <h1 className='text-orange-300 bg-slate-500'>currency convertor</h1>
   <InputBox></InputBox>
   </>
  )
}

export default App
