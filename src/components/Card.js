import React from "react";
import { useState,useEffect } from "react";
export default function Card(props) {
  return (
    <div className="mt-4 ">
      <div className="card   me-auto ms-auto " style={{width:'64.2rem'}} >
        <img src={props.img} className="card-img-top" alt="..." />
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

          <div
            className="card-subtitle ps-5 col-11 pt-3 row h4"
            style={{ color: "#5C5C5C" }}
          >
           {props.subtitle}
          </div>

          <div className="ps-5  pt-5 row">
            <div className="col-1">
              <img
                src={props.userimage}
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
  );
}
