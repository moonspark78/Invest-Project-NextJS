import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-20 pb-16 bg-[#001232]'>
        {/* Seaction Heading */}
        <SectionHeading heading='Latest Blog'/>
        {/* Define the grid systeme */}
        <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {/* Grid Component 1 */}
            <div>
                <BlogCard image="/images/b1.jpg" title="10 Reason to Invest for you future"/>
            </div>
            {/* Grid Component 2 */}
            <div>
                <BlogCard image="/images/b2.jpg" title="7 Reason to Invest for you future"/>
            </div>
            {/* Grid Component 3 */}
            <div>
                <BlogCard image="/images/b3.jpg" title="5 Reason to Invest for you future"/>
            </div>
        </div>
    </div>
  )
}

export default Blog