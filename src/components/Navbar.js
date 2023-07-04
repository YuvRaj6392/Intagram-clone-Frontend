import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function Navbar() {
const history=useNavigate()
const {state,dispatch}=useContext(UserContext)
//state has the details of the user!
const renderList=()=>{
  if(state)
  {
    return [
      <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>,
        <li><button
      className="btn waves-effect waves-light #64b5f6 red darken-2" onClick={()=>{
        localStorage.clear();
        dispatch({type:"CLEAR"})
        history('/signin');
      }}>
      Logout
    </button></li>
    ]
  }
  else
  {
    return [
      <li><Link to="/signin">Login</Link></li>,
      <li><Link to="/signup">Signup</Link></li>,
      
    ]
  }
}
  return (
    <div>
    <nav>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
      <ul id="nav-mobile" className="right">
       {renderList()}
      </ul>
    </div>
  </nav>
    </div>
  )
}
