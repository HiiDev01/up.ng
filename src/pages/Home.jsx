import React from 'react'
import Nav from '../layouts/Nav'
import { PiVideoFill,PiClockClockwiseBold } from "react-icons/pi";
import { BsShieldFillCheck } from "react-icons/bs";
import '../styles/Home.css'

const Home = () => {
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
            <div className="mainBlogItems"></div>
            <div className="mainBlogItems"></div>
            <div className="mainBlogItems"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
