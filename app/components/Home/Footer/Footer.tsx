import React from 'react'

const Footer = () => {
  return (
    <div className='pt-12 bg-[#5306e0] pb-12'>
        {/* Define grid systeme */}
        <div className='w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-8
        md:grid-cols-2 lg:grid-cols-4 gap-8 items-start'>
            {/* 1part footer */}
            <div className='lg:mx-auto mx-0'>
                {/* Logo */}
                <h1 className='text-[16px] md:text-[25px] font-bold text-white'>
                    <span className='text-[27px] md:text-[40px] text-yellow-300'>
                        IN
                    </span>
                    Vestor
                </h1>
                <p className='text-white mt-2 text-opacity-60'>
                    Lorem ipsum, dolor amet consectetur adipisicing.
                </p>
                <p className='mt-4 text-white'>support@gmail.com</p>
                <p className='text-red-300 text-md font-bold mt-2'>+(33) 59 59 59 59</p>
            </div>
            {/* 2part footer */}
            <div className='lg:mx-auto mx-0'>
                <h1 className='text-[17px] text-white font-semibold mb-6'>
                    Company
                </h1>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    About
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Affiliate
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Careers & Culture
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Blog
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Press
                </p>
            </div>
              {/* 3part footer */}
            <div className='lg:mx-auto mx-0'>
                <h1 className='text-[17px] text-white font-semibold mb-6'>
                    Our Information
                </h1>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Return Policy
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Privacy Policy
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Terms & Condition
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Site Map
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Store Hours
                </p>
            </div>
            {/* 4part footer */}
            <div className='lg:mx-auto mx-0'>
                <h1 className='text-[17px] text-white font-semibold mb-6'>
                    About Us
                </h1>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Support Center
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Customer Support
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    About Us
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Copyright
                </p>
                <p className='text-white opacity-80 mb-4 text-[15px] cursor-pointer hover:text-yellow-300 border-b-2 border-dashed'>
                    Popular Campaign
                </p>
            </div>
        </div>
        {/* copyright */}
        <div className='w-4/5 mx-auto text-[15px] text-white opacity-75 mt-2'>Copyright © 2024 by Souli</div>
    </div>
  )
}

export default Footer