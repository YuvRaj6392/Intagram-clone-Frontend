import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function Navbar() {
const {state,dispatch}=useContext(UserContext)
//state has the details of the user!
const renderList=()=>{
  if(state)
  {
    return [
      <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>
    ]
  }
  else
  {
    return [
      <li><Link to="/signin">Login</Link></li>,
      <li><Link to="/signup">Signup</Link></li>
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
