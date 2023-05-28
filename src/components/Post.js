import React from "react";
import Groups from "./Groups";
export default function Post() {
  return (
    <div>
      <div className="mt-5 pt-5">
        <button
          type="text"
          style={{
            background: "#ffff",
            border: "none",
            borderBottom: "1px solid #B8B8B8",
            width: "24.3rem",
          }}
        >
          <img src="location.png" className=""></img>
          <input
            type="text"
            className=""
            placeholder="Enter Your Location"
            style={{
              border: "none",
              outline: "none",
              fontSize: "1.4rem",
              fontWeight: 400,
            }}
          ></input>
          <img src="close.png" className="btn"></img>
        </button>

        <div className="d-flex align-items-center mt-3 ms-3">
          <img src="info.png" className="logo" alt="Logo" />
          <span
            className="ms-2 col-5 mt-4"
            style={{ fontSize: "1.2rem", fontWeight: 400 }}
          >
            Your location will help us serve better and extend a personalized
            experience.
          </span>
        </div>

      </div>

         <div className="mt-5 ms-3 pt-5">
            <img src="recommended.png"></img>
            <span className="ms-2 mt-5" style={{fontSize:'1.4rem',fontWeight:400,letterSpacing:'10%'}} >RECOMMENDED GROUPS</span>
        </div>
        <div className='pt-2 ms-3'>
        <Groups img='g1.png' text='Leisuer' id='btn1'></Groups>
        <Groups img='g2.png' id='btn2' text='Activism'></Groups>
        <Groups img='g3.png' id='btn3' text='MBA'></Groups>
        <Groups img='g4.png' id='btn4' text='Philosophy'></Groups>
        </div>
    </div>
  );
}
