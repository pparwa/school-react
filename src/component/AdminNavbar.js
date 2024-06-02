import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { usercontext } from "../App";
import logo from '../image/logo.jpg'
import Chart from "./Chart";

export default function NavbarAdmin(){
const {state,dispatch} = useContext(usercontext)
const navigate = useNavigate()

    return(

        <>
            <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-primary p-2 "style={{minHeight:"10vh"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} style={{width:'7vw',height:'7vh',borderRadius:'50%'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active fs-2 fs-sm-4 mx-2 "  to="/">افزودن درس</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light fs-2 fs-sm-4 mx-2" to="/login/admin/addperson">افزودن شخص</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-2 fs-sm-4 mx-2" to="/login/admin/addinfo">اطلاعیه</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-2 fs-sm-4 mx-2" to="/login/admin/editperson">ویرایش شخص</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-2 fs-sm-4 mx-2" to="/login/admin/addtable">برنامه درسی</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-2 fs-sm-4 mx-2" to="/history" onClick={()=>navigate('/')}>خروج</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
   
        
        </>
    )
}