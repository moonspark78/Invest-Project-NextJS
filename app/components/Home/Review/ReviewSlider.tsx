
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ReviewSlider = () => {


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 764 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 764, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };


  return (
    <div>ReviewSlider</div>
  )
}

export default ReviewSlider