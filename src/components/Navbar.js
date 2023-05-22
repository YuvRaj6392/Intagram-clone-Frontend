import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
    <nav>
    <div className="nav-wrapper white">
      <a href="/" className="brand-logo left">Instagram</a>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}
