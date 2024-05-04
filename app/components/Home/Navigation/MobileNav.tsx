import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import Link from 'next/link'

const MobileNav = () => {
  return (
    <div className='transform transition-all duration-500 fixed top-0 left-0 z-[200] h-screen right-0
    bottom-0 bg-[#29207f]'>MobileNav
    {/* Close icon */}
    <FaXmark className='w-8 h-8 absolute top-8 text-white z-[202] right-8'/>
    {/* nav links */}
    <ul className='relative z-[201] space-y-10 flex flex-col items-center justify-center h-full'>
      <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
        <Link href="/">Home</Link>
      </li>
      <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
        <Link href="/">About</Link>
      </li>
      <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
        <Link href="/">Investment</Link>
      </li>
      <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
        <Link href="/">Services</Link>
      </li>
      <li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>
        <Link href="/">Contact</Link>
      </li>
    </ul>
    </div>
  )
}

export default MobileNav