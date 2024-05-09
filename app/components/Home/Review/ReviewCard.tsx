import React from 'react'
import { FaStar } from 'react-icons/fa';


type Props={
    image: string;
    name: string;
}

const ReviewCard = ({name,image}:Props) => {
  return (
    <div className='p-6 bg-[#032055]'>
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
    </div>
  )
}

export default ReviewCard