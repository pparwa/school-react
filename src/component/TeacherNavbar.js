import React, { useEffect, useState } from "react";
import { NavLink , Link} from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import Chart from "./Chart";
import './TeacherNavbar.css';
export default function TeacherAdmin(){

const [params,setparams] = useState({
  id:null,
  grade:null
})

//const [state , dispatch] = useContext(usercontext)
 const user = useSelector(state => state.User)
 useEffect(()=>{
  
 setparams({id:user.id,grade:user.grade})
 console.log(params)
 
 },[])

    return(
      <>
 <div className="d-flex"> 
   <div className="col-sm-3 bg-primary d-flex flex-column" style={{height:"100%",width:"20%"}} >
      <ul className="p-0 m-0 w-100 d-flex flex-column">
      <li className="  text-center fs-light p-3 border-bottom mt-3 dashlink "  style={{marginLeft:"-12px"}}>
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center text-center" style={{width:"10vw",marginLeft:"-12px"}}>
        <h2 className="linksize text-center border border-4 rounded-circle p-4"  > <i class="fa-solid fa-user linksize"></i></h2>
          <p className="p-0 m-0 linksize">{user.name} {user.lastname}</p>
        </div>
      </li>
       
      <li className="text-center fs-dark P-3  border-bottom dashlink" style={{marginRight:"-15px"}}>
        <NavLink to={`/login/teacher/addpoint/${params.id}`}>
        <p className="text-center mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>ثبت نمره</p>
          </NavLink>
      </li>

       <NavLink to={`/login/teacher/presence/${params.id}`}>
      <li   className="text-center fs-light p-3 border-bottom dashlink" style={{marginRight:"-15px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>حضور غیاب</p>
      </li>
      </NavLink>
      <NavLink to={`/login/teacher/practice/${params.id}`}>
      <li   className="text-center fs-light p-3 border-bottom dashlink" style={{marginRight:"-15px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>ثبت تمارین</p>
      </li>
      </NavLink>
       <NavLink to={`/login/teacher/chat/${params.id}/${params.grade}`}>
      <li   className="text-center fs-light p-3 border-bottom dashlink" style={{marginRight:"-15px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>ثبت اطلاعیه</p>
      </li>
      </NavLink>
      <NavLink to="/login/teacher/present">
      <li   className="text-center fs-light p-3 border-bottom out" style={{marginRight:"-15px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize out" style={{width:"10vw"}}>خروج</p>
      </li>
      </NavLink>

      </ul>
    </div>
    <div className="my-auto mx-auto" >
      <h3 className="text-center">وضعیت</h3>
    <Chart />
    </div>
    </div>
  
        </>
    )
}