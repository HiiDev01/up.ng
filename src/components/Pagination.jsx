import React from 'react'
import '../styles/Pagination.css'

const Pagination = ({totalPost,postPerPage, setCurrentPage, currentPage}) => {
  let pages = [];
  for(let i = 1; i<= Math.ceil(totalPost/postPerPage); i++){
    pages.push(i);
  }
  return (
    <>
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
    </>
  )
}


export default Pagination
