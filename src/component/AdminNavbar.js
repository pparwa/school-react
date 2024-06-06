import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { usercontext } from "../App";
import logo from '../image/logo.jpg'
import Chart from "./Chart";
import './AdminNavbar.css'
export default function NavbarAdmin(){
const {state,dispatch} = useContext(usercontext)
let [open , setopen] =useState(false)
console.log(state)
const navigate = useNavigate()

    return(

        <>
{/*            <div>
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
    </div>*/}
      

      <div className="nav-container">
          <div className="nav">
            <div className="menue-bar">
                  <input type="checkbox" id="check" hidden 
                  onChange={()=>setopen(!open)}/>
                  <label for="check">
                    {!open?(
                     <img  id="open-icon" width="30" height="30" src="https://img.icons8.com/ios/50/menu-squared-2.png" alt="menu-squared-2" />
                    ):(
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1"/>
                    )}
                  </label>
                  <ul className={` ${open? 'mobile-menue ': 'move' }`}>
                     <li >
          <NavLink  className="nav-link"  to="/login/admin/addperson">افزودن شخص</NavLink>
        </li>
        <li >
          <NavLink  className="nav-link"  to="/login/admin/addinfo">اطلاعیه</NavLink>
        </li>
        <li >
          <NavLink   className="nav-link"  to="/login/admin/editperson">ویرایش شخص</NavLink>
        </li>
        <li>
          <NavLink   className="nav-link"    to="/login/admin/addtable">برنامه درسی</NavLink>
        </li>
        <li >
          <NavLink className="nav-link" to="/history" onClick={()=>navigate('/')}>خروج</NavLink>
        </li>
                  </ul>
                </div>
               <div className="school-icon">
                
                  <img src={logo} style={{width:'5vw',height:'5vh',borderRadius:'50%'}}/>
               </div>
               <ul className="options">
        <li >
          <NavLink  className="nav-link"  to="/login/admin/addperson">افزودن شخص</NavLink>
        </li>
        <li >
          <NavLink  className="nav-link"  to="/login/admin/addinfo">اطلاعیه</NavLink>
        </li>
        <li >
          <NavLink   className="nav-link"  to="/login/admin/editperson">ویرایش شخص</NavLink>
        </li>
        <li>
          <NavLink   className="nav-link"    to="/login/admin/addtable">برنامه درسی</NavLink>
        </li>
        <li >
          <NavLink className="nav-link" to="/history" onClick={()=>navigate('/')}>خروج</NavLink>
        </li>
               </ul>

          <div className="user-info">
            <div className="user-img">
                <img  width="80" height="80" src="https://img.icons8.com/color/48/circled-user-male-skin-type-7--v1.png" alt="circled-user-male-skin-type-7--v1"/>
            </div> 
             <div className="user-form">
                <p style={{textAlign:'center'}}>{state.name} {state.lastname}</p>
             </div>
          </div>

          </div>
            

      </div>
    
   
        
        </>
    )
}