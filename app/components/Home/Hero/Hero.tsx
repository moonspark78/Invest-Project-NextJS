import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='lg:h-[88vh] bg-[#62269d] md:h-[88vh] sm:h-[75vh] h-[70vh] flex items-center
    justify-center flex-col'>
        {/* define grid system */}
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center w-4/5 mx-auto'>
            {/* Text content */}
            <div className='col-span-2'>
                <h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-4 font-bold text-white leading-[2.4rem]
                md:leading-[4rem]'>
                    100% Secure <span className='text-yellow-300'>Investment</span> Plan
                </h1>
            </div>
            {/* Image div */}
            <div className='col-span-3'>
                <Image src="" alt='icon-hero'/>
            </div>
        </div>
    </div>
  )
}

export default Hero