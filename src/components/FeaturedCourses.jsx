import React from 'react'
import Rating from './Rating'
import '../styles/FeaturedCourses.css';
import { FaRegHeart } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { IoPlayCircleOutline } from "react-icons/io5";

const FeaturedCourses = ({featuredCourse, onItemClick}) => {
  return (
    <>
      {featuredCourse.map((feature)=>(
        <div className='featureCourses' 
          key={feature.id}
          onClick={(e)=> onItemClick && onItemClick(feature, e)}
         >
          <div  
            className="featureCoursesImgCon"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(82, 99, 250, 0.25),rgba(82, 99, 250, 0.25)),url(${feature.thumbnail})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            >
              <div className="featureOverlay"></div>
          </div>
          <div className='featureDet'>
            <div>
              <h2>{feature.heading}</h2>
              <p>{feature.instructor}</p>
              <Rating rating={feature.rating}/>
            </div>
            <button><FaRegHeart size={20}/></button>
          </div>
          <div className='featureInfo'>
            <p><span><TbClockHour4 size={16}/> </span>{feature.hours} hours</p>
            <p><span><IoPlayCircleOutline size={16}/> </span>{feature.numberOfLessons} lesson</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default FeaturedCourses
