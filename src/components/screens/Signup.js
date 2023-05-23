import React from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div className="myCard">
    <div class="card auth-card">
      <h2>Instagram</h2>
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button
        class="btn waves-effect waves-light #64b5f6 blue lighten-2"
        
      >
        SignUp
       
      </button>
      <h6>
          <Link to='/signin'>Already have an account?</Link>
        </h6>
    </div>
  </div>
  )
}
