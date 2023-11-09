import React, {useId} from 'react'

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency='usd',
  amountDisabled=false,
  currencyDisabled=false,
  className="",

}) => {

  const amountInputId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2' >
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block '>
          {label}inputbox component
        </label>
        <input 
          type="number"
          placeholder='Amount'
          id= {amountInputId}
          disabled={amountDisabled}
          className='outline-none bg-transparent w-full py-1.5'
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          
          />
      </div>

      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        
        <select 
          className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
          value= {selectCurrency}
          onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled = {currencyDisabled}
        >
          {currencyOptions.map((currency)=>(
            <option value='{currency}' key = '{currency}'>{currency}</option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default InputBox;