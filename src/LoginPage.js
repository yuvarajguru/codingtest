import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


export default function LoginPage({datasend}) {
 
    const [username,setUsername] =  useState();
    const [password,setPassword] =  useState();
    const [passwordType, setPasswordType] = useState("password");
    const [loggin ,setLoggin] = useState(true);
    const navigate = useNavigate();
    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }
    const loginChange = () =>{
        const item1 = localStorage.getItem('name');
        const item2 = localStorage.getItem('pwd');
        if(item1 === username && item2 === password){
            setLoggin(true)
            navigate('/landingpage')
            datasend(loggin)
            console.log(loggin)
        } else{
            setLoggin(false)
            alert('username and password invalid')
            
          
        }
    console.log(item1)
    console.log(item2)
    }
    console.log(username)
    
  return (
    <div>
        <h1>LoginPage</h1>
        <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
    <div class="card p-3 text-center py-4">
        <div> Login Page</div>
        <div class="px-sm-4 mt-3 px-3"> 
        <input class="form-control" type="text" placeholder="user name" value={username} 
        onChange={(e) => setUsername(e.target.value)}/> &nbsp;
     
        <div class="form-input ">  
                <input type={passwordType}  class="form-control" placeholder="password" value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
                 { passwordType==="password"? <i onClick={togglePassword} className="fa fa-eye-slash"></i> :<i onClick={togglePassword} className="fa fa-eye"></i> }
         </div>
                     
        
        </div>
        <div class="px-5 mt-4"> <button class="btn btn-secondary w-100 text-uppercase" onClick={loginChange}>Login</button> </div>
        <div class="px-5"> <span class="terms">By creating an account, you agree and accept our <a href="#" class="text-decoration-none">terms</a> and <a href="#" class="text-decoration-none">conditions</a>.</span> </div>
    </div>
</div>
    </div>
  )
}
