import React from 'react'

const CustomInput = ({label, text, handleChange}) => {
  
  return (
    <label>
        <label>
            {label}
            {''}
            <input
                value={text}
                onChange={handleChange}
            />
        </label>
    </label>
  )
}

export default CustomInput