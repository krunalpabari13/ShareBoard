import Link from 'next/link'
import React from 'react'

export default function Signup() {
  return (
    
    <div className=''>
       <div class="card container" style={{width: '80rem'}}>
        <div className='container mt-3' style={{fontWeight:500,fontSize:'1.4rem',color:'#008A45'}}>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='row container mt-5'>
            <div className='col-6' style={{fontWeight:700, fontSize:'2.4rem'}}>Sign In</div>
            <div className='col-6 mt-3' style={{fontWeight:600, fontSize:'1.3rem'}}>Don't Have an account yet? <span className='text-primary'><Link href='/Login'>Create new for free</Link></span></div>
        </div>
     
        <div className='row'>
            <div className='col-5 mt-5 ms-2'>
           
            <input type="email" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Email' class="form-control"/>
            <input type="password" style={{background:'#F7F8FA',color:'#8A8A8A',fontSize:'1.5rem',fontWeight:500 ,width:'32rem',height:'4.6rem'}}aria-label="First name" placeholder='Password' class="form-control"/>
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
        
     </div>
     
    </div>
  )
}
