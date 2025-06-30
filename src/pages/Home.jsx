import React, { useEffect, useState } from 'react'
import Nav from '../layouts/Nav'
import { PiVideoFill,PiClockClockwiseBold } from "react-icons/pi";
import { BsShieldFillCheck } from "react-icons/bs";
import BlogsCards from '../components/BlogsCards';
import LatestBlogCard from '../components/LatestBlogCard';
import '../styles/Home.css'
import LearningCards from '../components/LearningCards';

const Home = () => {
  const [homeBlog, setHomeBlogs] = useState([]);
  const [courses, setCourses] = useState([])
  const [error, setError] = useState(null);
  const latestBlog = homeBlog[1];
  const featuredCourse = homeBlog[5];

  useEffect(()=>{
    const handleFetchBlogs = async ()=>{
      try {
        const res = await fetch('http://localhost:5000/blogs')
        if(!res.ok){
          throw new Error('error fecthing data');
        }
        const data = await res.json();
        console.log(data)
        setHomeBlogs(data);
        setError(null)
      } catch (error) {
        console.log(error, 'error fetching blog card')
        setError('erorr fething data');
      }
    }
    handleFetchBlogs();
  },[])

  useEffect(()=>{
    const fetchCourse = async () =>{
      try {
        const res = await fetch('http://localhost:5000/courses')
        if(!res.ok){
          throw new Error('erroe fecthing data');
        }
        const data = await res.json();
        console.log(data)
        const slicedData = data.slice(0, 6)
        setCourses(slicedData)
        setError(null);
      } catch (error) {
        console.log(error, 'error fecthing data')
        setError('erorr fetching data');
      }
    }
    fetchCourse()
  }, [])
  return (
    <div className='home'>
      <header>
        <Nav/>
        <div className='HeroSec'>
          <div className='HeroDet'>
            <h1>Learn to Code</h1>
            <p>
              Learn business, technology, and creative skills 
              from industry experts.<br></br> Discover a wide range of 
              professional tutorials to help you grow.
            </p>
            <a href="" className='browseLink'>browse courses</a>
            <a href="" className='teacherLink'>are you a teacher</a>
          </div>
        </div>
      </header>
      <div className='HeroIntroCon'>
        <div className='HeroIntro'>
          <div className='HeroIconCon'>
            <PiVideoFill size={26}/>
          </div>
          <div className='HeroDetCon'>
            <h5>2,000+ courses</h5>
            <p>Professional development led by industry experts</p>
          </div>
        </div>
        <div className='HeroIntro'>
          <div className='HeroIconCon'>
            <BsShieldFillCheck size={26}/>
          </div>
          <div className='HeroDetCon'>
            <h5>Learn from Real-World Experts</h5>
            <p>Advance your career with guidance from industry leaders.</p>
          </div>
        </div>
        <div className='HeroIntro'>
          <div className='HeroIconCon'>
            <PiClockClockwiseBold size={26}/>
          </div>
          <div className='HeroDetCon'>
            <h5>Unlimited Access</h5>
            <p>Unlock everything. Learn anything. One simple subscription.</p>
          </div>
        </div>
      </div>
      <main className='main'>
        <div className='mainBlogCon'>
          <h2 className='mainBlogHeading'>from the blog</h2>
          <div className='mainBlogItemCon'>
            {error && <p>{error}</p>}
            <BlogsCards homeBlog={homeBlog}/>
          </div>
          <LatestBlogCard latestBlog={latestBlog}/>
        </div>

        <div className='mainLearningCon'>
          <h2 className='mainLearningHeading'>Learning Paths</h2>
          <div className="mainLearningWrapper">
             {error && <p>{error}</p>}
              <LearningCards courses={courses}/>
          </div>
        </div>

        <div className='mainFeatureCon'>
          <h2 className='mainLearningHeading'>features Paths</h2>
          <div className='mainFeatureWrapper'>
            {error && <p>{error}</p>}
            {featuredCourse.map((feature)=>(
              <div className='featureCourses' key={feature.id}>
                <div className="featureCoursesImgCon"></div>
                <div>
                  <h2>{feature.heading}</h2>
                  <p>{feature.instructor}</p>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
