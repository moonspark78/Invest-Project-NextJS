import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


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
        <p className='mt-6 text-white text-lg text-center'>{name}</p>
        <p className='mt-2 text-opacity-80 text-base text-yellow-400 text-center'>{invest}</p>
        <div className='mt-3 text-white flex items-center justify-center space-x-4'>
          <FaFacebook/>
          <FaTwitter/>
          <FaLinkedin/>
          <FaInstagram/>
          <FaYoutube/>
        </div>
    </div>
  )
}

export default InvestorCard