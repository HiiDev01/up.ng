import React from 'react'
import { MdOutlineStar,MdOutlineStarHalf,MdOutlineStarBorderPurple500 } from "react-icons/md";


const Rating = ({rating}) => {
  const totalStars = [];

   for(let i = 0; i <= 5; i++){
    if(i <= Math.floor(rating)){
      totalStars.push(<MdOutlineStar key={i} color='#f9c53a' size={16}/>)
    }else if(i - rating <= 0.5){
      totalStars.push(<MdOutlineStarHalf key={i} color='#f9c53a' size={16}/>)
    }else{
      totalStars.push(<MdOutlineStarBorderPurple500 key={i} color='#f9c53a' size={16}/>)
    }
   }
  return (
    <div>
      {totalStars}
    </div>
  )
}

export default Rating
