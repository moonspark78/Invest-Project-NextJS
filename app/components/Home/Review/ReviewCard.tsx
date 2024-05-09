import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';


type Props={
    image: string;
    name: string;
}

const ReviewCard = ({name,image}:Props) => {
  return (
    <div className='p-6 m-4 bg-[#032055]'>
        {/* review star */}
        <div className='flex items-center space-x-2 mt-4'>
            <FaStar className='w-4 h-4 text-yellow-500'/>
            <FaStar className='w-4 h-4 text-yellow-500'/>
            <FaStar className='w-4 h-4 text-yellow-500'/>
            <FaStar className='w-4 h-4 text-yellow-500'/>
            <FaStar className='w-4 h-4 text-yellow-500'/>
        </div>
        {/* Review Text */}
        <p className='mt-4 text-white text-opacity-70'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus exercitationem vero explicabo nemo neque reprehenderit.
        </p>
        {/* Profile */}
        <div className='flex mt-8 items-center space-x-4'>
            <div>
                <Image src={image} alt={name} width={60} height={60}/>
            </div>
            <div>
                <h1 className='text-lg text-white uppercase'>{name}</h1>
                <p className='mt-[0.3rem] text-[15px] text-white text-opacity-70'>
                    CEO, WDM
                </p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard