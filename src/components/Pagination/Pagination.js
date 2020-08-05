import React, { useState } from 'react';
import './Pagination.css'
const Pagination = ({ postsPerPage, totalPosts, paginate, height}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  let A = pageNumbers.length/5
  
  const [B,setB]=useState(0)
  const [C,setC]=useState(5)
  const [D,setD]=useState(0)
  const handleNext=()=>{
    if(D<A){
      setD(D+1);
      setB(B+5)
      setC(C+5)
    }else if(D>A){
      setD(0);
      setB(0)
      setC(5)
    }
    
  }
  console.log(B)
  console.log(D)
  const handlePreview=()=>{
    setD(D-1);
    setB(B-5)
    setC(C-5)
  }
  let Filter= pageNumbers.slice(B, C);

  const numberpage = Filter.map((number)=>{
    return(
      <>
         <ul >
         <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
         </ul>
      </>
    )
  })

  return (
    <div className="container">
        <ul className='pagination'>
          <div className='item'>
            <a  onClick={()=>handlePreview()}  style={{textAlign:'right',backgroundColor:'black'}}>{"<<"}</a>
            <a>{numberpage}</a>
            <a  onClick={()=>handleNext()} style={{backgroundColor:'black'}}>{">>"}</a> 
          </div>       
        </ul>         
    </div>
  );
};

export default Pagination;