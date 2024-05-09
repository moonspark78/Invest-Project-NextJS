"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';


const ReviewSlider = () => {


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1100, min: 764 },
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
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
    >

        {/* ReviewCard */}
        <ReviewCard image="/images/c1.png" name="Sajal"/>
        <ReviewCard image="/images/c2.png" name="Anas"/>
        <ReviewCard image="/images/c3.png" name="Elise"/>
        <ReviewCard image="/images/c4.png" name="Cyril"/>
    </Carousel>
  )
}

export default ReviewSlider