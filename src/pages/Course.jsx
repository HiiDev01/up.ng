import React from 'react'
import Nav from '../layouts/Nav'
import '../styles/Course.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";



const Course = () => {
  return (
    <div className='course'>
      <div className='navBox'>
        <Nav/>
      </div>
      <div className="CourseWraper">
        <div className="CourseItemOne">
          <div className='CourseHeading'>
            <p>Displaying 4 out of 10 courses</p>
            <div>
              <div>
                <p>sort by</p>
                <select name="" id="">
                  <option value="new">newest</option>
                  <option value="old">oldest</option>
                </select>
              </div>
              <div>
                <p>sort by</p>
                <select name="" id="">
                  <option value="Poppular">popularity</option>
                  <option value="NonPopular">Non popular</option>
                </select>
              </div>
              <div>
                <button><span><MdOutlineSettingsInputComponent size={16}/></span>filters</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="CourseItemTwo"></div>
      </div>
    </div>
  )
}

export default Course
