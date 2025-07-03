import React from 'react'
import '../styles/PopupCard.css'

const PopupCard = ({item, position, onClose}) => {

  if(!item) return null
  return (
    <div 
      style={ 
        {top: position.y, 
         left: position.x, 
         position: "absolute", 
         zIndex: 99}
         }
         className='popupCard'
    >
      <div className='popupHeadCon'>
        <div className='popupImgCon'><img src={item.thumbnail} alt={item.title} /></div>
        <div className='popupHeadDet'>
          <h4>{item.heading}</h4>
          <p>{item.numberOfLessons}  videos</p>
        </div>
      </div>
    </div>
  )
}

export default PopupCard
