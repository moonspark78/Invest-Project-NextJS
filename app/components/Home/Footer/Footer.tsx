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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer