import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar =() =>{
    return (
        <div>
<nav class="navbar navbar-expand-lg shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">ABOUT US</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/services">Providers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Feedback</a>
        </li>
      </ul>
      <a class="navbar-brand vfw-bolder fs-4 mx-auto" href="/">Health and Life Insurance</a>
      {/* <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i> Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-user-plus me-2"></i> Register</NavLink> */}
       
        <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
        <i className="fa fa-sign-out me-2"></i> Logout</NavLink>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;