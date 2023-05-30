import React from 'react'

export default function Card1(props) {
    const {btncolor}=props;
  return (
    <div className="mt-4">
    <div className="card ms-auto me-auto" style={{ width: "64.2rem" }}>
    { props.img && <img src={props.img} className="card-img-top" alt="..." />}
      <div className="card-body row">
        <div className='d-flex col-12 mt-2 ps-5 pt-3'>
        <img src={props.vector} style={{height:'1.8rem'}}></img>
        <p className="card-subtitle  ps-4 h4 row ">{props.title}</p>
        </div>
        <div className="row">
          <div
            className="card-title h2 ps-5 pt-3 col-9"
            style={{ fontWeight: 600 }}
          >
            {props.maintitle}
          </div>
          <div className="col-1 pt-3 ms-auto">
            <img src="dots.png"></img>
          </div>
        </div>

       <div className='row col-12 pt-3'>
        <div className='col-6 d-flex ps-5 '>
            <img
              src={props.infoimg}
              style={{width:'1.6rem',height:'1.5rem'}}
            />
            <div style={{fontWeight:'bold' , fontSize:'1.5rem'}} className='ps-2'>{props.info}</div>
        </div>
        <div className=' col-3 d-flex ps-5'>
        <img src="location.png" className="" style={{height:'2.5rem',width:'2.5rem'}}></img>
            <div style={{fontWeight:'bold' , fontSize:'1.5rem'}}>{props.location}</div>
        </div>
       </div>
        <div className='col-12 pt-3 ps-5 row container'>
            <button className='btn ' style={{border:'1px solid #A9AEB8',color:btncolor,fontSize:'1.3rem',fontWeight:600}}>{props.btnvalue}</button>
        </div>
        <div className="ps-5  pt-5 row">
          <div className="col-1">
            <img
              src={props.userimg    }
              class="rounded-circle"
              style={{ width: "4rem" }}
              alt="Avatar"
            />
          </div>
          <div
            className="col-3 pt-3"
            style={{ fontSize: "1.5rem", fontWeight: 600 }}
          >
            {props.username}
          </div>
          <div className="col-4 pt-3 d-flex ms-auto">
              <img src="eye.png" className="mt-1" style={{height:'1.8rem'}}></img>
              <div style={{fontSize:'1.4rem', fontWeight:500}} className="ps-2">1.4k Views</div>
              <img src="share.png" className="ms-auto pe-4" style={{height:'2.8rem'}}></img>
          </div>


        </div>
      </div>
    </div>
  </div>
  )
}
