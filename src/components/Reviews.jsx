import React from 'react'
import Rating from '../components/Rating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = ({slicedReviews}) => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {slicedReviews.map((reviews)=>(
          <div className='reviewCard' key={reviews.id}>
            <div className='reviewPara'>
              <p>{reviews.comment}</p>
            </div>
            <div className='reveiwProfile'>
              <div className="reviewImgCon">
                <img src={reviews.profile} alt={reviews.author} />
              </div>
              <div>
                <h2>{reviews.author}</h2>
                <Rating rating={reviews.rating}/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Reviews
