import React from 'react'

interface InputProps {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='w-full p-2 rounded bg-zinc-800 text-white outline-none transition-colors duration-300 ease-in-out focus:bg-gray-600 md:w-80'
    />
  )
}
