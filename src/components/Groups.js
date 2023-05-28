import React from 'react'
import { useEffect,useState } from 'react';
export default function Groups(props) {
const [follow,setFollow]=useState('Follow');
useEffect(()=>{
    setFollow('Follow')
},[follow])


    let btnclick=(e)=>{
        const id=document.getElementById(e.target.id);
       
        if(id.value=='Follow')
        {
            id.value='Followed'
            setFollow('Followed');
            id.style.background="black"
            id.style.color="white";
        }
        else{
            id.value='Follow'
            setFollow('Follow');
            id.style.background='#EDEEF0'
            id.style.color='black'
        }
    }
  return (
    <div className="mt-5 row">
    <img
            src={props.img}
            class="rounded-circle "
            style={{ width: "4rem" }}
            alt="Avatar"
          />
          <span style={{fontSize:'1.4rem',fontWeight:400}} className="ms-2 me-5 col-2">{props.text}</span>
          <button style={{background:'#EDEEF0',width:'7rem'}} id={props.id} className="btn rounded-pill  col-2" onClick={btnclick}>{follow}</button>
    </div>
  )
}
