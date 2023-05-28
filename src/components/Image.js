import React from "react";

export default function Image() {
  return (
    <>
      <div className="position-relative">
      <div className=' position-absolute text-white  container imgalign' >
       
          <div className="imgtext1 ">Computer Enigneering</div>
          <div className="imgtext2" >
            142,765 Computer Enigneers follow this
          </div>
       
        </div>
        <img src="laptopimage.png" className="img-fluid stretch" ></img>
       
      </div>
    </>
  );
}
