import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
export default function UserProfile() {
    const [myPics,setMyPics]=useState([]);
    const {state,dispatch}=useContext(UserContext);
    const {userId}=useParams();
    useEffect(()=>{
     fetch(`http://localhost:8080/api/showUserProfile/${userId}`,{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        'x-access-token':localStorage.getItem('token')
      }
     }).then(res=>res.json()).then(
      result=>{
        setMyPics(result.posts)
        console.log(result)
      }  
      )
     
    },[])
  return (
    <div style={{maxWidth:'80%',margin:'0px auto'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="profilePic"
          />
        </div>
        <div>
          <h3>{state?state.name:"Loading"}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h5>3003 posts</h5>
            <h5>576.4m followers</h5>
            <h5>457 following</h5>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
         <img
          className="item"
          src="https://images.unsplash.com/photo-1634455257140-b5ab16f0770e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="galleryImage"
        />
      </div>
    </div>
  );
}

