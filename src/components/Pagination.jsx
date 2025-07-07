import React from 'react'

const Pagination = ({totalPost,postPerPage, setCurrentPage}) => {
  let pages = [];
  for(let i = 1; i<= Math.ceil(totalPost/postPerPage); i++){
    pages.push(i);
  }
  return (
    <>
     {pages.map((page, index)=>{
      return (
      <button key={index} onClick={()=> setCurrentPage(page)}>
        {page}
      </button> 
      )
     })}
    </>
  )
}

export default Pagination
