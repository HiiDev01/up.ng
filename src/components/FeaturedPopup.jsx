import React, { useEffect, useRef } from 'react'
import '../styles/FeaturedPopup.css'
import { GiCheckMark } from "react-icons/gi";
import { TbClockHour4 } from "react-icons/tb";
import { IoPlayCircleOutline } from "react-icons/io5";
import { TbAlignBoxBottomCenterFilled } from "react-icons/tb";


const FeaturedPopup = ({item, position, onClose}) => {
  
  const closeRef = useRef();

  useEffect(()=>{
    const handleClose = (e)=>{
      if(closeRef.current && !closeRef.current.contains(e.target)){
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClose);

    return () =>{
      document.removeEventListener('mousedown', handleClose);
    }
  }, [onClose]);

  if(!item) return null

  return (
    <div 
      className='popupCard'
      ref={closeRef}
      style={ 
        {top: position.y, 
         left: position.x, 
         position: "absolute", 
         zIndex: 2
        }
         }
    >
      <div className='popupHeadCon'>
        <div className='popupImgCon'><img src={item.thumbnail} alt={item.title} /></div>
        <div className='popupHeadDet'>
          <h4>{item.heading}</h4>
          <p>{item.numberOfLessons}  videos</p>
        </div>
      </div>
      <p className='popupIntro'>
        Learn the fundamentals of working 
        with {item.heading} and how to create basic applications.
      </p>
      <ul className='popupUL'>
        {item.keyPoints.map((points, index)=>(
          <li key={index}>
            <span className='pointIcon'>
              <GiCheckMark size={12}/>
            </span> 
            <span className='points'>
              {points}
            </span>
          </li>
        ))}
      </ul>
      <div className='popupFooter'>
        <div className='popupFooterHead'>
          <p><TbClockHour4 size={16}/> <small>{item.hours} hours</small></p>
          <p><IoPlayCircleOutline size={16}/>{item.numberOfLessons} lessons</p>
          <p><TbAlignBoxBottomCenterFilled size={16}/>{item.level} level</p>
        </div>
        <button>start now</button>
      </div>
    </div>
  )
}

export default FeaturedPopup
