import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/contact";



function App() {
  return (
    <div className="App">

      


      <Router>

      <ul style={{listStyle:'none',  display:'flex',justifyContent:'center',paddingLeft:'5px'}}>
        <li ><Link to='/' style={{textDecoration:'none',paddingLeft:'5px'}}>Home</Link></li>
        <li><Link to='/About' style={{textDecoration:'none',paddingLeft:'5px'}}>About Us</Link></li>
        <li><Link to ='/Contact' style={{textDecoration:'none',paddingLeft:'5px'}}>Contact Us</Link></li>
      </ul>



        <Routes>
          <Route path='/' 
          Component={Home}/>

          <Route exact path='/About'
          Component={About}/>

          <Route path='/Contact'
          Component={Contact}
          />

         
        </Routes>


      </Router>
      
    </div>
  );
}

export default App;
