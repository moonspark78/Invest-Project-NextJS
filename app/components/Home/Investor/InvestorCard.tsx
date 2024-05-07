import Image from 'next/image';
import React from 'react'


type Props = {
    image: string;
    invest: string;
    name: string;
}



const InvestorCard = ({invest,image,name}:Props) => {
  return (
    <div className='bg-blue-900 p-6'>
        {/* Image */}
        <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className='-mt-12'
        />
    </div>
  )
}

export default InvestorCard