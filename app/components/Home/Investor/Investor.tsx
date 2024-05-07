import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import InvestorCard from './InvestorCard'

const Investor = () => {
  return (
    <div className='pt-20 pb-16 bg-[#032055]'>
        {/* Section Heading */}
        <SectionHeading heading='Our Top Investors'/>
        {/* Define the grid systeme */}
        <div className='w-4/5 mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {/* Investor Profile 1 */}
            <div>
                <InvestorCard image="/images/i1.jpg" invest="29034295" name="John"/>
            </div>
        </div>
    </div>
  )
}

export default Investor