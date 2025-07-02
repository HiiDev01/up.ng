import React, { useEffect, useState } from 'react'
import Nav from '../layouts/Nav'
import { PiVideoFill,PiClockClockwiseBold } from "react-icons/pi";
import { BsShieldFillCheck } from "react-icons/bs";
import BlogsCards from '../components/BlogsCards';
import LatestBlogCard from '../components/LatestBlogCard';
import '../styles/Home.css'
import LearningCards from '../components/LearningCards';
import FeaturedCourses from '../components/FeaturedCourses';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [homeBlog, setHomeBlogs] = useState([]);
  const [courses, setCourses] = useState([])
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [popUpposition, setPopUpPosition] = useState({x: 0, y: 0});
  const navigate = useNavigate()
  const latestBlog = homeBlog[1];
  const mainCourse = courses.slice(0, 6)
  const featuredCourse = courses.slice(6, 10);
  const slicedReviews = reviews.slice(0, 4);

  useEffect(()=>{
    const handleFetchBlogs = async ()=>{
      try {
        const res = await fetch('http://localhost:5000/blogs')
        if(!res.ok){
          throw new Error('error fecthing data');
        }
        const data = await res.json();
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

  useEffect(()=>{
    const fetchReview = async ()=>{
      try {
        const res = await fetch('http://localhost:5000/reviews')
        if(!res.ok){
           throw new Error('error fecthing reviews data');
        }
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.log(error, 'error fecthing reviews data')
        setError('erorr fetching reviews data');
      }
    }
    fetchReview();
  }, []);

  const handleClick = (e) =>{
    const rect = e.currentTarget.getBoundingClientRect();

    setPopUpPosition({
      X: rect.right + 10,
      x: rect.top + window.scrollY,
    });


    setSelectedItem()
  }

 
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
              <LearningCards courses={mainCourse}/>
          </div>
        </div>

        <div className='mainFeatureCon'>
          <h2 className='mainLearningHeading'>features Paths</h2>
          <div className='mainFeatureWrapper'>
            {error && <p>{error}</p>}
            <FeaturedCourses featuredCourse={featuredCourse}/>
          </div>
        </div>

        <div className="mainFeedBackCon">
          <div className="mainFeedBackHeading">
            <h1>Feedback</h1>
            <p>What are the awesome testimony from our previous student. what are they  saying about the platform after attaining their goals.</p>
          </div>
          <div className='FeedBackWrapper'>
             <Reviews slicedReviews={slicedReviews}/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
