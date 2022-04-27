
import './App.css';

import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import Contact from './Contact';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [ischeck ,setIscheck] = useState(false);
  const getData = (data) =>{
    setIscheck(data)
    console.log('boolean',data)
  }
  return (
    <div className="App">
    

       <Router>
         <div className='nav-bar'> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/landingpage">LandingPage</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      <h2>{ischeck ? <p> movie list</p> : <p>move to login page</p> }</h2>
         <Routes>
           <Route exact path="/" element={<SignupPage/>}></Route>
           <Route exact path="/login" element={<LoginPage datasend={getData}/>}></Route>
           {ischeck ? <Route exact path="/landingpage" element={<LandingPage/>}></Route> : "move to login page"}
           <Route exact path="contact" element={<Contact/>}></Route>
         </Routes>
       </Router>
    </div>
  );
  
}

export default App;
