import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { BsCheck2Square } from 'react-icons/bs'

const About = () => {
  return (
    <div className='pt-20 pb-16 bg-[#001232]'>
        {/* Section Heading */}
        <SectionHeading heading='About Us'/>
        {/* define grid systeme */}
        <div className='w-4/5 mt-14 items-center md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Text content */}
          <div>
            <h1 className='text-[16px] md:text-[20px] font-semibold text-white'>
                A fastest way to do just about anything.
            </h1>
            <p className='text-white text-opacity-60 mt-4 text-[13px]'>
                Clarinet accustomed. Would legs of framework officers.
                We&apos;ve to morning like a contracting him, the the to said in need gradually wellfeigned.
            </p>
            {/* icon list item */}
            <div className='flex mt-8 items-center space-x-4'>
                {/* icon box */}
                <div className=''>
                    <BsCheck2Square className=''/>
                </div>
                {/* text box */}
                <div></div>
            </div>
          </div>
          {/* Image content */}
          <div></div>
        </div>
    </div>
  )
}

export default About