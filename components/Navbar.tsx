import React from 'react'
import { IoIosTimer } from 'react-icons/io'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-5'>
      <h1 className='text-2xl text-black flex items-center'>
        <IoIosTimer />
        Time
      </h1>
      <button className='bg-black text-white px-4 py-1'>Logout</button>
    </div>
  )
}
