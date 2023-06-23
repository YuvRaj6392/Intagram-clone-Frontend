import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
export default function Home() {
  const [data,setData]=useState("");
  const {state,dispatch}=useContext(UserContext);
  const {comment,setComment}=useState("")
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

  const makeComment=(text,postId)=>{
    fetch('http://localhost:8080/api/comments',{
      method:'Put',
      headers:{
        'Content-Type':'application/json',
        'x-access-token':localStorage.getItem('token')
      },
      body:JSON.stringify({
        text:text,
        postId:postId
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
    }).catch(err=>{
      console.log(err)
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
           
            {item.likes.includes(state._id)
            ?
            <i className="material-icons" style={{color:'red',cursor:'pointer'}}  onClick={()=>{
              unlikePost(item._id)
            }}>favorite</i>
           :
           <i className="material-icons" style={{cursor:'pointer'}}  onClick={()=>{
              likePost(item._id)
            }}>favorite_border</i>
           
            }
                <h6>{item.likes.length} liked</h6>
                <h6>{item.title}</h6>
                <p>{item.body}</p>
                {
                  item.comments.map(record=>{
                    return (
                      <h6><span style={{fontWeight:'500'}}>{record.postedBy.name}</span>&nbsp;{record.text}</h6>
                    )
                  })
                }
                <form onSubmit={e=>{
                  e.preventDefault();
                  makeComment(e.target[0].value,item._id)
                }} >
                <input type="text" placeholder='add a comment' />
                </form>
                
            </div>
        </div>
        )
      })
    }
        
    </div>
  )
}
//card-image, card-content is already defined in materialize