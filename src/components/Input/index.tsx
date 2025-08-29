import React from 'react'
import { type InputProps } from "../../types/types";


const Input = ({placeholder, value, onChange, required}: InputProps) => {
  return (
    <div className='flex justify-center items-center pb-4 w-full'>
        <input type="text" required={required} value={value}  onChange={(e) => onChange(e.target.value)} className='w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600' placeholder={placeholder}/>
    </div>
  )
}

export  {Input}