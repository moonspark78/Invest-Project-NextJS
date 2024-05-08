import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-20 pb-16 bg-[#6a15e1]'>
         {/* Section Heading */}
         <SectionHeading heading='Client Review'/>
         {/* Review slider div */}
         <div>
            {/* Review slider component */}
            <ReviewSlider/>
         </div>
    </div>
  )
}

export default Review