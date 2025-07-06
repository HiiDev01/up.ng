import React, { useRef, useEffect } from 'react'
import '../styles/PopupCard.css'
import { TbClockHour4 } from "react-icons/tb";
import { IoPlayCircleOutline } from "react-icons/io5";
import Rating from './Rating';

const PopupCard = ({item, position, onClose}) => {

  const closeRef = useRef();
  useEffect(()=>{
    const handleClose = (e)=>{
      if(closeRef.current && !closeRef.current.contains(e.target)){
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClose);

    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  }, [onClose]);


  if(!item) return null
  return (
    <div 
      style={ 
        {top: position.y, 
         left: position.x, 
         position: "absolute", 
         zIndex: 2}
         }
      className='popupCard'
      ref={closeRef}
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

      <div className='popupMain'>
        <div className='popupIconCon'>
          <p>
            <span><TbClockHour4 size={16}/></span>
             {item.hours} hours
          </p>
          <p>
            <span><IoPlayCircleOutline size={16}/></span>
             {item.numberOfLessons} courses
          </p>
        </div>
        <div className='popupBtnCon'>
          <button>resume</button>
          <button>start over</button>
        </div>
      </div>
      <p className='cRating'> <span>course rating </span><Rating rating={item.rating} style={{color: 'var(--main)'}}/></p>
    </div>
  )
}

export default PopupCard
