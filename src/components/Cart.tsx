import React from 'react'
import { FaBookQuran } from "react-icons/fa6";

interface CartProps {
  name: string
  age: number
  city: string
}
function Cart({name, age, city}:CartProps) {
  return (
    <div
     className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border rounded'
    >
      <h1 className='text-2xl text-black font-bold text-center'>{name}</h1>
      <p className='text-1xl text-black font-bold text-center'>{age}</p>
      <p className='text-1xl text-black font-bold text-center'>{city}</p>
      <span className='text-1xl text-black font-bold text-center'><FaBookQuran/></span>
    </div>
  )
}

export default Cart