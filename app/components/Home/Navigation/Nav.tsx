import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-[12vh] bg-[#62269d] shadow-md'>
      <div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
        {/* Logo */}
        <h1 className='text-[16px] md:text-[25px] font-bold text-white'>
          <span className='text-[27px] md:text-[40px] text-yellow-300'>
            IN
          </span>
          Vestor
        </h1>
        {/* Nav Links */}
        <ul className='hidden lg:flex items-center space-x-10'>
          <li className='text-[17px] font-semibold cursor-pointer text-yellow-300'>
            <Link href="/">Home</Link>
          </li>
          <li className='text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400'>
            <Link href="/About">About</Link>
          </li>
          <li className='text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400'>
            <Link href="/Investment">Investment</Link>
          </li>
          <li className='text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400'>
            <Link href="/Services">Services</Link>
          </li>
          <li className='text-[17px] font-semibold cursor-pointer transition-all duration-200 text-white hover:text-yellow-400'>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        {/* Login Button */}
        <div className='flex items-center space-x-4'>
          <button className='rounded px-10 py-2.5 overflow-hidden group bg-yellow-500 '></button>
        </div>
      </div>
    </div>
  )
}

export default Nav