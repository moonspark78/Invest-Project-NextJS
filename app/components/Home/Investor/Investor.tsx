import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import InvestorCard from './InvestorCard'

const Investor = () => {
  return (
    <div className='pt-20 pb-16 bg-[#032055]'>
        {/* Section Heading */}
        <SectionHeading heading='Our Top Investors'/>
        {/* Define the grid systeme */}
        <div className='w-4/5 mt-16 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {/* Investor Profile 1 */}
            <div>
                <InvestorCard image="/images/i1.jpg" invest="29034295" name="John"/>
            </div>
            {/* Investor Profile 2 */}
            <div>
                <InvestorCard image="/images/i2.jpg" invest="39032805" name="Alice"/>
            </div>
            {/* Investor Profile 3 */}
            <div>
                <InvestorCard image="/images/i3.jpg" invest="16934295" name="Zac"/>
            </div>
            {/* Investor Profile 4 */}
            <div>
                <InvestorCard image="/images/i4.jpg" invest="49079425" name="Ali"/>
            </div>
        </div>
    </div>
  )
}

export default Investor