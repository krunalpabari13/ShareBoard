import React from 'react'

export default function Topbar() {
  return (
    <div className=''>
    <ul className="nav container " style={{fontSize:'1.6rem', fontWeight:400}}>
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
  
    <button className='' style={{width:'13rem', height:'3.6rem',borderRadius:'0.4rem',background:'#EDEEF0',fontSize:'1.5rem',fontWeight:500,border:'none'}}>
    
        Write a Post <img src='dropdown.png'  className='ps-2' ></img>
        </button>
  
  </li>
  <div className='ps-4'>
  <li className='nav-item  pe-4'>
 
   
    <button className='text-white ' style={{width:'13rem', height:'3.6rem',borderRadius:'0.4rem',background:'#2F6CE5',fontSize:'1.5rem',fontWeight:500,border:'none'}}>
    <img src='join.png' className='pe-3 pb-1'  ></img>
        Join Group</button>
  </li>
  </div>
  </div>
</ul>
    {/* <div className='container ps-5'>
    <img src='tabline.png' className=''></img>
    </div> */}
    </div>


  )
}
