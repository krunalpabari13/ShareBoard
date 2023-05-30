import React from 'react'
import { useEffect } from 'react';
export default function Topbar() {
  
  
  return (
  <>
    <div className='container row ms-auto me-auto d-none d-sm-block'   >
      <div className=''>
    <ul className="nav  ms-5" style={{fontSize:'1.6rem', fontWeight:400}}>
    <div className='ms-4  nav mt-4'>
  <li className="nav-item pe-3 ps-5 ">
    <a className="nav-link active text-dark tabs" aria-current="page" href="#">All Post(32)</a>
  </li>
   <li className="nav-item pe-3  ">
    <a className="nav-link  tabs" href="#">Article</a>
  </li>
  <li className="nav-item pe-3  ">
    <a className="nav-link  tabs" href="#">Event</a>
  </li>
  <li className="nav-item pe-3  ">
    <a className="nav-link  tabs disabled">Education</a>
  </li>
  <li className="nav-item pe-3  ">
    <a className="nav-link  tabs disabled">Job</a>
  </li>
  </div>
  <div className='  ms-auto me-5 pe-5 mt-4 nav'>
   <li className='nav-item  pe-4'>
 
<div className='position-relative me-3'>
<button className='  ' style={{width:'13rem', height:'3.6rem',borderRadius:'0.4rem',background:'#EDEEF0',fontSize:'1.5rem',fontWeight:500,border:'none'}}>
            Write a Post 

        </button>      
        <img src='dropdown.png' className='position-absolute mt-4 me-2 '  style={{height:'0.4rem',width:'0.9rem',right:0}}></img>   

    </div>


  
  </li>
    
  <li>
  <div className='position-relative me-5 pe-5'>
  <img src='join.png' className='position-absolute mt-3  ms-1  pt-1'  style={{height:'1.4rem',width:'2.2rem'}}></img>   

  <button className='text-white ' style={{width:'13rem', height:'3.6rem',borderRadius:'0.4rem',background:'#2F6CE5',fontSize:'1.5rem',fontWeight:500,border:'none'}}> Join Group</button>
    </div>
  </li>
  </div>
</ul>
</div>
     {/* <div className='container ps-5'>
    <img src='tabline.png' className=''></img>
    </div> */}

</div> 




<div className='row container ms-auto me-auto d-sm-none justify-content-center ' >
<ul class="nav ms-5 ps-5"  style={{fontSize:'1.6rem', fontWeight:700}}>
  <div className='ms-5 ps-5 '> 
     <li class="nav-item ps-4">
    <a class="nav-link text-dark tabs" aria-current="page" href="#" style={{fontSize:'2.4rem', fontWeight:700}}> Post(362)</a>
  </li>
  </div>


  <li className='nav-item  ms-auto  me-5 pe-5' >
  <div className='position-relative me-5   mt-2' >
  <button className=' ' style={{width:'18rem', height:'4.6rem',borderRadius:'0.4rem',background:'#EDEEF0',fontSize:'2.4rem',fontWeight:500,border:'none',}}>
           Filter:All

        </button>      
        <img src='dropdown.png' className='position-absolute mt-4 me-4'  style={{height:'1rem',width:'1.4rem',right:0}}></img>   

    </div>
  </li>
 

</ul>
</div>  
  

</>
  )
}
