import React from 'react'
import '../styles/Pagination.css'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({totalPost,postPerPage, setCurrentPage, currentPage}) => {
  let pages = [];
  for(let i = 1; i<= Math.ceil(totalPost/postPerPage); i++){
    pages.push(i);
  }
  return (
    <div className='pagination'>
      <p><FaAngleDoubleLeft size={16}/></p>
     {pages.map((page, index)=>{
      return (
        <button 
          key={index} 
          onClick={()=> setCurrentPage(page)}
          className={page == currentPage ? 'active' : ''}
          >
          
           {page}
        </button> 
      )
     })}
     <p><FaAngleDoubleRight size={16}/></p>
    </div>
  )
}


export default Pagination
