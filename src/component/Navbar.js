import React from "react";
import { NavLink , Link} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import logo from '../image/logo.jpg'

function Navbar(){
    return(
  <Fade delay={1000}>
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2 "style={{minHeight:"10vh"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} style={{width:'7vw',height:'7vh',borderRadius:'50%'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-2 fs-sm-4 mx-2" to="/payment">کمک مالی</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-2 fs-sm-4 mx-2" to="/history">تاریخچه</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i class="fa fa-user" aria-hidden="true"></i>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink className="nav-link  fs-2 fs-sm-4 mx-2"   to="/login">ورود</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </Fade>
    )
}
export default Navbar;