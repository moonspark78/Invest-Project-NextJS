import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-20 pb-16 bg-[#5507e1]'>
        <SectionHeading heading='Our Pricing'/>
        {/* Define grid system */}
        <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-16'>
            {/* Pricing Card */}
            <div>
                <PriceCard
                    bg="bg-teal-700"
                    days="20"
                    percentage="100"
                    minInvest="100"
                    maxInvest="1000"
                />
            </div>
        </div>
    </div>
  )
}

export default Price