import Image from 'next/image'
import React from 'react'
import HeroImage from "@/public/images/hero.png"

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
                <p className='md:text-[17px] text-[15px] mb-8 text-white opacity-90 font-normal'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Amet distinctio fugiat optio non aliquid minus id perspiciatis placeat autem iusto
                </p>
                {/* input box */}
                <div className='w-full h-14 relative rounded-full bg-blue-950'>
                    <input 
                        type="text" 
                        placeholder='Enter your mail' 
                        className='bg-transparent h-full ml-8 text-white outline-none w-[90%]'
                    />
                </div>
                {/* submit button */}
                <button className='px-4 py-2 w-[40%] bg-blue-500 hover:bg-blue-700 transition-all
                duration-150 rounded-full mt-4 text-white'>Submit</button>
            </div>
            {/* Image div */}
            <div className='col-span-3 hidden sm:block mx-auto'>
                <Image src={HeroImage} alt='icon-hero' priority/>
            </div>
        </div> 
    </div>
  )
}

export default Hero