import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { FaMoneyBill, FaPiggyBank } from 'react-icons/fa'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { BiSupport } from 'react-icons/bi'

const Feature = () => {
  return (
    <div className='pt-20 pb-16 bg-[#032055]'>
        {/* Section Heading */}
        <SectionHeading heading='Why Choose Us'/>
        {/* Define the Grid System */}
        <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center'>
            {/* 1st feature card */}
            <div>
              <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-100 bg-orange-600 rounded-md shadow-md'>
                <FaMoneyBill className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-[15px] text-center text-white mt-8 mb-4 font-semibold'>Fast Profit</h1>
                <p className='text-[12px] text-white text-center text-opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.</p>
              </div>
            </div>
            {/* 2st feature card */}
            <div>
              <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-100 bg-red-600 rounded-md shadow-md'>
                <FaPiggyBank className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-[15px] text-center text-white mt-8 mb-4 font-semibold'>Instant Withdraw</h1>
                <p className='text-[12px] text-white text-center text-opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.</p>
              </div>
            </div>
            {/* 3st feature card */}
            <div>
              <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-100 bg-green-600 rounded-md shadow-md'>
                <FaMoneyBillTransfer className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-[15px] text-center text-white mt-8 mb-4 font-semibold'>Multi-Currency</h1>
                <p className='text-[12px] text-white text-center text-opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.</p>
              </div>
            </div>
            {/* 4st feature card */}
            <div>
              <div className='p-6 cursor-pointer hover:scale-110 transition-all duration-100 bg-indigo-900 rounded-md shadow-md'>
                <BiSupport className='mx-auto mt-8 w-16 h-16 text-white'/>
                <h1 className='text-[15px] text-center text-white mt-8 mb-4 font-semibold'>Customer Support</h1>
                <p className='text-[12px] text-white text-center text-opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, consequuntur.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Feature