import Image from 'next/image';
import React from 'react'


type Props={
    title: string;
    image: string;
}

const BlogCard = ({image, title}:Props) => {
  return (
    <div>
        {/* image */}
        <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className='object-cover rounded-lg'
        />
        <div className='flex mt-6 items-center space-x-4'>
            <span className='text-[15px] text-white text-opacity-60'>
                10 may 2024
            </span>
            <span className='text-[15px] text-white text-opacity-60'>
                By Admin
            </span>
        </div>
        <h1 className='text-white underline cursor-pointer text-md mt-4 font-semibold'>
            {title}
        </h1>
        <p className='mt-2 text-white underline cursor-pointer text-md'>
            Read More
        </p>
    </div>
  )
}

export default BlogCard