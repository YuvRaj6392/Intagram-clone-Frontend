import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'
export default function Signup() {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const history = useNavigate();
  const signupFormSubmit= async(e)=>{
    e.preventDefault();
    if(!email || !name || !password || !confirmPassword)
    {
      M.toast({html: 'Please fill all the fields!',classes:'red'})
    }
    else if(password!==confirmPassword)
    {
      M.toast({html: 'Passwords do not match!',classes:'red'})
    }
    else if (!emailRegex.test(email)) {
      M.toast({ html: 'Invalid email format!', classes: 'red' });
    }
    else
    {
     let obj={
      email:email,
      name:name,
      password:password
     }
     const response=await  fetch('http://localhost:8080/api/signup',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(obj)
     })
     const json=await response.json();
     if(json.success)
     {
      setName("");
      setPassword("");
      setName("");
      setConfirmPassword("");
      M.toast({html: "Account created successfully!",classes:'green'})
      history('/signin')
     }
     else
     {
      setName("");
      setPassword("");
      setName("");
      setConfirmPassword("");
      M.toast({html: json.message,classes:'red'})
     }
    }
  }
  return (
    <>
    <form onSubmit={signupFormSubmit} >
    <div className="myCard">
    <div className="card auth-card">
      <h2>Instagram</h2>
      <input type="text" placeholder="E-mail" value={email} onChange={e=>{
        setEmail(e.target.value)
      }} />
      <input type="text" placeholder="Name" value={name} onChange={e=>{
        setName(e.target.value)
      }} />
      <input type="password" placeholder="Password" value={password} onChange={e=>{
        setPassword(e.target.value)
      }} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e=>{
        setConfirmPassword(e.target.value)
      }} />
      <button
        className="btn waves-effect waves-light #64b5f6 blue lighten-2"
        
      >
        SignUp
       
      </button>
      <h6>
          <Link to='/signin'>Already have an account?</Link>
        </h6>
    </div>
  </div>
    </form>

    </>
    
  )
}
