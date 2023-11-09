import React from 'react'

const InputBox = () => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2' >
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block '>
          {label}
        </label>
      </div>

    </div>
  )
}

export default InputBox