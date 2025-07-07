import React, { useEffect, useState } from 'react'
import Nav from '../layouts/Nav'
import '../styles/Course.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import FeaturedCourses from '../components/FeaturedCourses';
import Pagination from '../components/Pagination';


const Course = () => {
  const [course, setCourses] = useState([]);
  const slicedCourse = course.slice(0, 4);
  const totalPost = course.slice(3)
  /*const otherCourse = course.slice(3);*/
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = totalPost.slice(firstPostIndex, lastPostIndex)


  useEffect(()=>{
      const fetchCourse = async () =>{
        try {
          const res = await fetch('http://localhost:5000/courses')
          if(!res.ok){
            throw new Error('erroe fecthing data');
          }
          const data = await res.json();
         /* const slicedData = data.slice(0, 6)*/
          setCourses(data)
          setError(null);
        } catch (error) {
          console.log(error, 'error fecthing data')
          setError('erorr fetching data');
        }
      }
      fetchCourse()
    }, [])
  return (
    <div className='course'>
      <div className='navBox'>
        <Nav/>
      </div>
      <div className="CourseWraper">
        <div className="CourseItemOne">

          <div className='CourseHeading'>
            <p>Displaying 4 out of 10 courses</p>
            <div className='searchCourseCon'>
              <input type="text"  placeholder='Browse all  course'/>
            </div>
          </div>

          <main className='main'>
            <div className='mainCourseCon'>
              <h2 className='mainLearningHeading'>Popular Courses</h2>
              <div className='cousresGrid'>
                 <FeaturedCourses featuredCourse={slicedCourse}/>
              </div>
            </div>

            <div className='mainCourseCon'>
              <h2 className='mainLearningHeading'>other Courses</h2>
              <div className='cousresGrid'>
                 <FeaturedCourses featuredCourse={currentPost}/>
              </div>
              <Pagination totalPost={totalPost.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Course
