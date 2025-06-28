import React from 'react'
import { IoEyeSharp } from "react-icons/io5";

const BlogsCards = ({homeBlog}) => {
  return (
    <>
      {homeBlog.map((blog) =>(
        <div 
          key={blog.id}
          className='mainBlogItems'
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(39, 44, 51, 0.84),rgba(39, 44, 51, 0.84)), url(${blog.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="overlay">
            <div className='overlayTop'>
              <div className="iconCon">
                <img src={blog.authorImage} alt={blog.author} />
              </div>
              <p><span><IoEyeSharp /></span> 324</p>
            </div>
            <div className='CourseDet'>
              <h3>{blog.heading}</h3>
              <p>{blog.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogsCards
