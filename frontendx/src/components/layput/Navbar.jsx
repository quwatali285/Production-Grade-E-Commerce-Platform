import React from 'react'
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-auto h-[60px] bg-zinc-800 border-b border-zinc-700 flex justify-between items-center px-6 text-white'>
      
      {/* Left */}
      <div className='text-lg font-semibold'>
        Quwat Experience
      </div>

      {/* Right */}
      <div className='flex items-center gap-5'>
        <FaBell className='cursor-pointer hover:text-pink-400' />
        <FaUserCircle className='text-2xl cursor-pointer hover:text-pink-400' />
      </div>

    </div>
  )
}

export default Navbar