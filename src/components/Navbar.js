import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=''>

        <nav className="navbar fixed-top" style={{backgroundColor:'#ffff'}}>
  <div className="container-fluid">
    <div class>
    <a className=" ps-5" href="#">
      <img
        src="mainlogo.png"
        alt="Logo"
        height={'22rem'}
        width={'110rem'}
        className="img-fluid"
      />
    </a>
    </div>

    <div className='ms-auto me-auto'>
    <img src='searchlogo.png' className='pt-3 ps-2 position-absolute ' style={{height:'2.4rem',width:'2.3rem'}}></img>   

    <input className="form-control ps-5 " type="search" value="Search for your group in ATG" id="example-search-input" style={{background:'#F2F2F2',height:'3.5rem', width:'34rem', borderRadius:'12rem',fontSize:'1vw'}}/>
             
    </div>
  
  
    <div className='pe-4' style={{fontSize:'1vw'}}>
    <div>
        Create account<b className='text-primary ' > <Link href='/Login'>It's free</Link>  <img src='dropdown.png' className='position-absolute mt-3 me-2 '  style={{height:'0.4rem',width:'0.9rem',right:0}}></img></b>

    </div>
  </div>
  </div>

  
</nav>

        </div>
  )
}
