import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"
import './App.css'

export default function SignupPage() {

  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const [email,setEmail] = useState();
  const [mobile,setMobile] = useState();
  const navigate = useNavigate();

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  const handleClick = () =>{
    
    localStorage.setItem('name', username);
    localStorage.setItem('pwd', password);
    navigate('/login');
  }
  console.log('email',email)
  console.log('mob number', mobile)
  return (
    <div className='form'>    
  <div class="container mt-5 mb-5">
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
            <div class="card px-5 py-5"> 
            
                <div class="form-input">  
                <span style={{color: 'black'}}>Signup</span>
                <input type="text" class="form-control"  placeholder="User name" value={username}
                onChange={(e) => setUsername(e.target.value)}/> </div>
                <div class="form-input">  
                <input type={passwordType}  class="form-control" placeholder="password" value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
                 { passwordType==="password"? <i onClick={togglePassword} className="fa fa-eye-slash"></i> :<i onClick={togglePassword} className="fa fa-eye"></i> }
                 </div>
                <div class="form-input"> 
                <input type="email" class="form-control" placeholder="Email address" value={email}
                 onChange={(e) => setEmail(e.target.value)}/> </div>
                <div class="form-input"> 
                <input type="text" class="form-control" placeholder="mobile number" value={mobile}
                onChange={(e) => setMobile(e.target.value)}/> </div>
                <button class="btn btn-primary mt-4 signup" onClick={handleClick}>Signup</button>
                
                <div class="text-center mt-4"> <span>Already a member?</span> <a href="/login" class="text-decoration-none">Login</a> </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
