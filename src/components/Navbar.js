import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>

        <nav className="navbar fixed-top" style={{backgroundColor:'#ffff'}}>
  <div className="container-fluid">
    <div class>
    <a className="navbar-brand ps-5" href="#">
      <img
        src="mainlogo.png"
        alt="Logo"
        height={'25rem'}
        width={'110rem'}
        className=" "
      />
    </a>
    </div>

    <div className='ms-auto me-auto'>
    <img src='searchlogo.png' className='pt-3 ps-2 position-absolute ' style={{height:'2.4rem',width:'2.3rem'}}></img>   

    <input className="form-control ps-5 " type="search" value="Search for your group in ATG" id="example-search-input" style={{background:'#F2F2F2',height:'3.5rem', width:'34rem', borderRadius:'12rem',fontSize:'1vw'}}/>
             
    </div>
  
  
    <div className='pe-4' style={{fontSize:'1vw'}}>
    <div>
        Create account<b className='text-primary ' > <Link href='/Login'>It's free</Link> <img src='dropdown.png ' className='ps-1 image-container' ></img></b>

    </div>
  </div>
  </div>

  
</nav>

        </div>
  )
}
