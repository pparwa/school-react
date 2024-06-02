import React from "react";
import { NavLink , Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Chart from "./Chart";
export default function StudentNavbar(){

const user = useSelector(state => state.User)
console.log(user)
    return(
        <>
<div className="d-flex justify-content-between">
  <div className="col-sm-3 bg-primary d-flex flex-column" style={{height:"100vh",width:"20%"}} >
      <ul className="p-0 m-0 w-100 d-flex flex-column">
      <li className="  text-center fs-light p-3 border-bottom mt-3 dashlink "  style={{marginLeft:"-2px"}}>
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center text-center" style={{width:"10vw",marginLeft:"-12px"}}>
        <h2 className="linksize text-center border border-4 rounded-circle p-4"  > <i class="fa-solid fa-user linksize"></i></h2>
          <p className="p-0 m-0 linksize">{user.name} {user.lastname}</p>
        </div>
      </li>
       
      <li className="text-center fs-dark P-3  border-bottom dashlink" style={{marginLeft:"-2px"}}>
        <NavLink to={`/login/students/seeprogram/${user.grade}`}>
        <p className="text-center mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>برنامه هفتگی</p>
          </NavLink>
      </li>

      <NavLink to= {`/login/students/seepoints/${user.id}`} >
      <li   className="text-center fs-light p-3 border-bottom dashlink" style={{marginLeft:"-2px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>نمرات</p>
      </li>
      </NavLink>
       <NavLink to= {`/login/students/chat/${user.id}/${user.grade}`} >
      <li   className="text-center fs-light p-3 border-bottom dashlink" style={{marginLeft:"-2px"}}>
         <p className="mx-auto mt-4 p-4 rounded-circle linksize" style={{width:"10vw"}}>صفحه چت</p>
      </li>
      </NavLink>
      <NavLink to="/login/teacher/present">
      <li   className="text-center fs-light p-3 border-bottom out" style={{marginLeft:"-2px"}}>
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