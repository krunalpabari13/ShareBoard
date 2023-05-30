import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
export default function Modal2() {
    const [show, setShow] = useState(false);
    const [signup,setSignup]=useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
   <>
    <Button variant="primary" onClick={handleShow}>
    Launch demo modal
  </Button>
  { {signup} &&
  <Modal show={show} onHide={handleClose} style={{position:'fixed',top:'10%',transfor:'translate(-10%,-10%)'}}>
  
  
 
  <div class="card container" style={{width: '80rem'}}>
  <Modal.Header closeButton >
  <Modal.Title>
        <div className='container mt-3' style={{fontWeight:500,fontSize:'1.4rem',color:'#008A45'}}>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='row container mt-5'>
            <div className='col-6' style={{fontWeight:700, fontSize:'2.4rem'}}>Create Account</div>
            <div className='col-6 mt-3' style={{fontWeight:600, fontSize:'1.3rem'}}>Already have an account? <span className='text-primary'><Link href='/Signup'>Sign In</Link></span></div>
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
                <button className='btn btn-primary rounded-pill btn-lg container'>Create Account</button>
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

  </>
  )
}
