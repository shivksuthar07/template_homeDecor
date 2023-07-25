import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//  import img from "./logoone.jpg"
 import Carrasal from './Carrasal'
 import About from './About';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import Events from './Events';
const Navbar = () => {
  return (
    <div className='container-fluid '>
    <nav id="navbar-example2" className="navbar bg-body-tertiary px-4 mb-0 positon-relative">
    <a className="navbar-brand" href="#">HomeDeCor</a>
    <ul className="nav ">
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading1">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading3">PRICING</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading4">PORTFOLIO</a>
      </li>
      <li className="nav-item">
        <Link to='/login' className="nav-link" >LOGIN</Link>
      </li>
     
     
    </ul>
  </nav>
  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" class="scrollspy-example " tabindex="0">
    <div id="scrollspyHeading1" ><Carrasal/></div>
   
    <div id="scrollspyHeading2"><About/></div>
    
    <div id="scrollspyHeading3"><Pricing/></div>
    <div id="scrollspyHeading4"><Events/></div>
 
   
   
  </div>
    </div>
  )
}

export default Navbar
