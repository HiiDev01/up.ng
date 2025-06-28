import React from 'react'
import { FaRegFolderClosed } from "react-icons/fa6";

const LatestBlogCard = ({latestBlog}) => {

  return (
    <>
      {latestBlog &&(
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
            <p>{latestBlog.heading}</p>
          </div>
          <p>{latestBlog.date}</p>
        </div>
      )}
    </>
  )
}

export default LatestBlogCard
