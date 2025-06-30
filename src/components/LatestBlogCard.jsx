import React from 'react'
import { FaRegFolderClosed } from "react-icons/fa6";

const LatestBlogCard = ({latestBlog}) => {

  return (
    <>
      {latestBlog &&(
        <div className='LBlogWrapper'>
          <div className='LBlogCon'>
            <div className='LBlogItem'>
              <div className="LBlogIcon">
                <img src={latestBlog.coverImage} alt={latestBlog.title} />
              </div>
              <div className='LBlogDet'>
                <h3>{latestBlog.title}</h3>
                <p>40 veiws last weeks</p>
              </div>
            </div>
            
            <div className='LBlogItem'>
              <span><FaRegFolderClosed /></span>
              <p className='LBlogPara'>{latestBlog.heading}</p>
            </div>
            <p className='LBlogPara'>{latestBlog.date}</p>
            <div className='LBlogTutorCon'>
              <div className='LBlogTutorIcon'>
                <img src={latestBlog.authorImage} alt={latestBlog.title} />
              </div>
              <h2>{latestBlog.author}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LatestBlogCard
