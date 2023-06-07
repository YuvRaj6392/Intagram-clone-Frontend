import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data,setData]=useState("");
  useEffect(()=>{
  fetch('http://localhost:8080/api/showallposts',{
    headers:{
      'x-access-token':localStorage.getItem('token')
    }
  }
  ).then(res=>res.json()).then(result=>{
    console.log(result.message)
    setData(result.message)
  })
  },[])
  return (
    <div className='home'>
    {
     data && data.map(item=>{
        return (
          <div className='card home-card' key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className='card-image'>
              <img src={item.photo} alt={item.postedBy.name} />
            </div>
            <div className='card-content'>
            <i className="material-icons" style={{color:'red'}}>favorite</i>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                <input type="text" placeholder='add a comment' />
            </div>
        </div>
        )
      })
    }
        
    </div>
  )
}
//card-image, card-content is already defined in materialize