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
    </div>
  )
}

export default BlogCard