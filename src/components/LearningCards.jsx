import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const LearningCards = ({courses, onItemClick}) => {
  return (
    <>
      {courses.map((course)=>(
        <div key={course.id} 
          onClick={(e)=> onItemClick(course, e)}
          className='mainLearning'>
          <div className='mainLearnWrap'>
            <div className='mainLearningSub'>
              <div className="courseIcon">
                <img src={course.thumbnail} alt={course.title} />
              </div>
              <div className="courseDet">
                <h2>{course.heading}</h2>
                <p>{course.numberOfLessons} course</p>
              </div>
            </div>
            <button><FaRegHeart size={20}/></button>
          </div>
        </div>
      ))}
    </>
  )
}

export default LearningCards
