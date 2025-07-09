import React, { useEffect, useState } from 'react'
import Nav from '../layouts/Nav'
import '../styles/Course.css';
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import FeaturedCourses from '../components/FeaturedCourses';
import Pagination from '../components/Pagination';
import FeaturedPopup from '../components/FeaturedPopup';


const Course = () => {
  const [course, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const slicedCourse = course.slice(0, 4);
  const totalPost = course.slice(3)
  /*const otherCourse = course.slice(3);*/
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = totalPost.slice(firstPostIndex, lastPostIndex)
  const [selectedItem, setSelectedItem] = useState(null);
  const [popUpPosition, setPopUpPosition] = useState({x: 0, y: 0});
  const [searchQuery, setSearchQuery] = useState('');


  const filteredItem = course.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );


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
  }, []);

  const handlePopup = (item, e) =>{
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = {
      x: rect.left + -100,
      y: rect.top  + window.scrollY,
    };
    setPopUpPosition(newPosition);
    setSelectedItem(item)
    console.log('popup position:', newPosition);
  }
  const handlePopupClose = ()=>{
    setSelectedItem(null)
  }

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
              <input  
                 type="text"  
                 placeholder='Browse all  course'
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}/>
            </div>
          </div>

          <main className='main'>
            <div className='mainCourseCon'>
              <h2 className='mainLearningHeading'>Popular Courses</h2>
              <div className='cousresGrid'>
                 <FeaturedCourses featuredCourse={slicedCourse}/>
              </div>
            </div>

            <div className='otherCourseCon'>
              <h2 className='mainLearningHeading'>other Courses</h2>
              <div className='otherCousresGrid'>
                 <FeaturedCourses 
                   featuredCourse={searchQuery ? filteredItem : currentPost} 
                   onItemClick={handlePopup}
                 />
                  {selectedItem && (
                    <FeaturedPopup  
                       item={selectedItem} 
                       position={popUpPosition} 
                       onClose={handlePopupClose}
                    />
                  )}
              </div>
              <Pagination 
                totalPost={totalPost.length} 
                postPerPage={postPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Course
