import React, { useState } from "react";

export default function Image() {
const[join,setJoin] = useState("Join Group");
  const joingroup=(e)=>{
    if(e.target.innerText=='Join Group')
    setJoin("Leave Group")
    else
    setJoin("Join Group")

  }
  return (
    <>
      <div className="position-relative">
      <div className=' position-absolute text-white   imgalign' >
       
          <div className="imgtext1 ">Computer Enigneering</div>
          <div className="imgtext2" >
            142,765 Computer Enigneers follow this
          </div>
       
        </div>

        <div className='position-absolute d-sm-none'>
        <img src="back.png" className="ms-5 mt-3"></img>
        </div>
        <div className='position-absolute mt-4 me-5 d-sm-none' style={{right:0}}>
        <button className='btn btn-outline-light rounded me-5 mt-4'onClick={joingroup} style={{height:'3.9rem',width:'12.5rem',fontSize:'1.6rem',fontWeight:500}}>{join}</button>
        </div>

        <img src="laptop1.png" className=" stretch"  ></img>
       
      </div>
    </>
  );
}
