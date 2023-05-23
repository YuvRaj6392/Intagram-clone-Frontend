import React from "react";
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="myCard">
      <div class="card auth-card">
        <h2>Instagram</h2>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button
          class="btn waves-effect waves-light #64b5f6 blue lighten-2"
          
        >
          Login
         
        </button>
        <h6>
          <Link to='/Signup'>Don't have an account?</Link>
        </h6>
      </div>
    </div>
  );
}
