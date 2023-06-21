import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
export default function Home() {
  const [data,setData]=useState("");
  const {state,dispatch}=useContext(UserContext)
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


  const likePost=(id)=>{
    console.log(id)
    fetch('http://localhost:8080/api/like',{
      method:'Put',
      headers:{
        "Content-Type":"application/json",
        "x-access-token":localStorage.getItem('token')
      },
      body:JSON.stringify({
        postId:id
      })
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      const newData=data.map(item=>{
        if(item._id===result.message._id)
        {
          return result.message;
        }
        else
        {
          return item;
        }
      })
      console.log(newData)
      setData(newData)
    })
  }


  const unlikePost=(id)=>{
    console.log(id)    
    fetch('http://localhost:8080/api/unlike',{
      method:'Put',
      headers:{
        "Content-Type":"application/json",
        "x-access-token":localStorage.getItem('token')
      },
      body:JSON.stringify({
        postId:id
      })
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      const newData=data.map(item=>{
        if(item._id===result.message._id)
        {
          return result.message;
        }
        else
        {
          return item;
        }
      })
      setData(newData)
    })
  }
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
            {item.likes.includes(state._id)
            ?
            <i className="material-icons" onClick={()=>{
              unlikePost(item._id)
            }}>thumb_down</i>
            :
            <i className="material-icons" onClick={()=>{
              likePost(item._id)
            }}>thumb_up</i>
           
            }
                <h6>{item.likes.length} liked</h6>
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