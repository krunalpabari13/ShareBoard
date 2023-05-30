import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [login,setLogin]=useState(false);
  const [signup,setSignup]=useState(true);
  const [loggedin,setLoggedIn]=useState(true);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handlesignup=(e)=>{
      if(e.target.innerText=='Sign In')
      {
        setSignup(false);
        setLogin(true);
      }
      else{
        setSignup(true);
        setLogin(false);
      }
  }
  const userLoggedIn=()=>{
    setLoggedIn(false)
    handleClose();
  }
  return (
    <div className='d-none d-sm-block'>

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
  
  
    <div className='pe-4' style={{fontSize:'1.6rem'}}>
    <div>
      {loggedin &&  <span>  Create Account<b className='text-primary ' > <a onClick={handleShow}>It's free</a></b>
      <img src='dropdown.png' className='position-absolute mt-3 me-2 '  style={{height:'0.4rem',width:'0.9rem',right:0}}></img>
      </span>} 
      {!loggedin && 
      <div className='d-flex position-relative'>
      <div className="col-1">
              <img
                src="siddharth.png"
                class="rounded-circle"
                style={{ width: "2.8rem" }}
                alt="Avatar"
              />
            </div>
            <div
              className=" col-8 ms-5 mt-2"
              style={{ fontSize: "1.2rem", fontWeight: 600 }}
            >
              Siddharth Goyal
            </div>
            <img src='dropdown.png' className='position-absolute mt-4 ms-2 '  style={{height:'0.4rem',width:'0.9rem',right:0}}></img>
          
      </div>}

    </div>
  </div>
  </div>

  
  </nav>

  {/* SignUp Modal */}
  { signup &&
  <Modal show={show} onHide={handleClose} style={{position:'fixed',top:'10%',transfor:'translate(-10%,-10%)'}}>
  
  
 
  <div class="card container" style={{width: '80rem'}}>
  <Modal.Header closeButton >
  <Modal.Title>
        <div className='container mt-3' style={{fontWeight:500,fontSize:'1.4rem',color:'#008A45'}}>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='row container mt-5'>
            <div className='col-6' style={{fontWeight:700, fontSize:'2.4rem'}}>Create Account</div>
            <div className='col-6 mt-3' style={{fontWeight:600, fontSize:'1.3rem'}}>Already have an account? <span className='text-primary'><a onClick={handlesignup}>Sign In</a></span></div>
        </div>
    </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className='row'>
            <div className='col-5 '>
            <div class="input-group" style={{background:'#D9D9DB',width:'32rem',height:'4.6rem'}}>
            
            <input type="text" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 }} aria-label="First name" placeholder='First Name' class="form-control"/>
            <input type="text" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 }}  aria-label="Last name" placeholder='Last Name' class="form-control"/>
            </div>
            <input type="email" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Email' class="form-control"/>
            <input type="password" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Password' class="form-control"/>
            <input type="password" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Confirm Password' class="form-control"/>
            <div className='col-12 mt-5'>
                <button className='btn btn-primary rounded-pill btn-lg container' onClick={userLoggedIn}>Create Account</button>
            </div>
            <div className='mt-5'></div>
            <div className='col-12 mt-5'>
                <button className='btn btn-outline-success rounded btn-lg container'><img src='facebook.png' className='me-4'></img>Sign Up With Facebook</button>
            </div>
            <div className='col-12 mt-3'>
                <button className='btn btn-outline-success rounded btn-lg container'><img src='google.png' className='me-4'></img>Sign Up With Google</button>
            </div>
            </div>
            
            <div className='col-6'>
                <img src='loginimg.png' className='img-fluid'></img>
                <div className='ms-5'>By signing up, you agree to our Terms & conditions, Privacy policy </div>
            </div>


           
        </div>
        </Modal.Body>
        
     </div>
     
    
    </Modal>}









    {/* Login Modal */}

    { login &&
  <Modal show={show} onHide={handleClose} style={{position:'fixed',top:'10%',transfor:'translate(-10%,-10%)'}}>
  
  
 
  <div class="card container" style={{width: '80rem'}}>
  <Modal.Header closeButton >
  <Modal.Title>
        <div className='container mt-3' style={{fontWeight:500,fontSize:'1.4rem',color:'#008A45'}}>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='row container mt-5'>
            <div className='col-6' style={{fontWeight:700, fontSize:'2.4rem'}}>Sign In</div>
            <div className='col-6 mt-3' style={{fontWeight:600, fontSize:'1.3rem'}}>Don't Have an account yet? <span className='text-primary'><a onClick={handlesignup}>Create new for free</a></span></div>
        </div>
    </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <div className='row'>
            <div className='col-5 mt-5 ms-2'>
           
            <input type="email" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Email' class="form-control"/>
            <input type="password" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Password' class="form-control"/>
            <div className='col-12 mt-5'>
                <button className='btn btn-primary rounded-pill btn-lg container' onClick={userLoggedIn}>Create Account</button>
            </div>
            <div className='mt-5'></div>
            <div className='col-12 mt-5'>
                <button className='btn btn-outline-success rounded btn-lg container'><img src='facebook.png' className='me-4'></img>Sign Up With Facebook</button>
            </div>
            <div className='col-12 mt-3'>
                <button className='btn btn-outline-success rounded btn-lg container'><img src='google.png' className='me-4'></img>Sign Up With Google</button>
            </div>
            </div>
            
            <div className='col-6'>
                <img src='loginimg.png' className='img-fluid'></img>
                <div className='ms-5'>By signing up, you agree to our Terms & conditions, Privacy policy</div>
            </div>


           
        </div>
        </Modal.Body>
        
     </div>
     
    
    </Modal>}

        </div>
  )
}
