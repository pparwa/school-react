import React, { useContext } from "react";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDispatch , useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { LoginValidate } from "../component/Utils/Validation";
import swal from "sweetalert";
import './Login.css'
import { login } from "../REDUX/Feature/User";
import { usercontext } from "../App";
import { Fade } from "react-awesome-reveal";



export default function Login(){
   /* const [person , setperson] = useState({
      name:"",
      pass:
    })
    onClick={(event)=>log(event)
    const [role, setrole] = useState('')*/
    const dispatch = useDispatch()
    const [load, setload] = useState(false)
    const [recaptcha,setrecaptcha] = useState(false)
    const navigate = useNavigate()
    const context = useContext(usercontext)
    console.log(context)
    const LoginForm = useFormik({
      initialValues:{
        name:"",
        pass:"",
        role:"-1",
      },
      validationSchema:LoginValidate,
      onSubmit:(values)=>{
      
     
      setload(true)
     axios.get(`http://localhost:5000/${values.role}?name=${values.name}&pass=${values.pass}`)
      .then((response)=>{
        
         
        const data = response.data[0]
        console.log(data)
        context.dispatch({type:'login',...data})
        console.log(context.state)
        
        
        if(!data){
           swal(
          {
            title:"مشکلی پیش آمده مجدد امتحان کنید",
            icon:'error'
          }
         )
        }
         if(data.role == 'admin')
         { 
            setload(false)
             swal({
              title:"خوش آمدید",
              icon:"success"
             })
             dispatch(login(data))
             navigate('/login/admin')
         }
         if(data.role == 'teacher')
         {
          setload(false)
             swal({
              title:"خوش آمدید",
              icon:"success"
             })
           dispatch(login(data))
          navigate(`/login/teacher`)
            }


           if(data.role == 'student')
         {
          setload(false)
             swal({
              title:"خوش آمدید",
              icon:"success"
             })
            dispatch(login(data))
          navigate(`/login/students`)

         }
         }
        
      ).catch(error=>{
        swal(
          {
            title:"مشکلی پیش آمده مجدد امتحان کنید",
            icon:'error'
          }
        )
      })
     
    //}
      
    }})
   /* const log = (event)=>{
      //if(recaptcha){
      event.preventDefault()
      setload(true)
     axios.get(`http://localhost:5000/${role}?name=${person.name}&pass=${person.pass}`)
      .then((response)=>{
        
         
        const data = response.data[0]
        dispatch({
          type:"login", payload:data
        })
         if(data.role == 'admin')
         { 
            setload(false)
             navigate('/login/admin')
         }
        
      })
     
    //}
    }*/
    if(load)
    {
      return(
        <>
    
      <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
        <div class="spinner-border fs-6 text-center d-flex justify-content-center mx-auto p-5" role="status">
  <span class="visually-hidden text-center d-flex justify-content-center mx-auto">Loading...</span>
  <h2 className="text-center text-dark">لطفا صبر کنید.....</h2>
</div>
</div>
</>
      )
    }
    else{

    return(
   <Fade delay={1000}>   
    <div className="Login-Container">
         <form class="Login-Form" onSubmit={LoginForm.handleSubmit}>
       <div className="user-icon"> 
          <div className="icon-container">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/user.png" alt="user"/>
          </div>
          </div>  


       <div className="input-box">
            <div class="Field">
            <label for="name">نام کاربری</label>
            <input type="text" class="form-control" id="name" placeholder="نام کاربری" value={LoginForm.values.name} onChange={LoginForm.handleChange} 
            onBlur={LoginForm.handleBlur}/>
          <h6 className="text-danger text-center">  {LoginForm.errors.name && LoginForm.touched.name && LoginForm.errors.name } </h6>
            </div>
            <div class="Field">
               <label for="inputPassword2">رمزعبور</label>
               <input name="pass" type="password" class="form-control" id="inputPassword2" placeholder="رمزعبور"  value={LoginForm.values.pass} onChange={LoginForm.handleChange}
               onBlur={LoginForm.handleBlur}/>
              <h6 className="text-danger text-center">  {LoginForm.errors.pass && LoginForm.touched.pass && LoginForm.errors.pass }</h6>
             </div>
             <div className="col-12">
                <select class="form-select" aria-label="Default select example" dir="ltr"
                 name="role" defaultValue={"-1"} onChange={LoginForm.handleChange}>
                <option defaultValue={'-1'}>سمت خودرا تعیین کنید</option>
             <option value="students">دانش آموز</option>
              <option value="teachers">معلم</option>
              <option value="Admin">ادمین</option>
    </select>
 <h6 className="text-danger text-center">{LoginForm.errors.role && LoginForm.touched.role && LoginForm.errors.role }</h6>
    </div>
      
<div className="d-flex justify-content-center align-items-center recaptcha">
             <ReCAPTCHA 
          
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={()=>{setrecaptcha(true)}}
    
         />
      </div>
              <div class="d-flex justify-content-center align-items-center mt-2" style={{cursor:recaptcha ? 'pointer' : 'not-allowed'}}>
         <button type="submit" class="btn btn-dark mx-auto mb-0 px-5 py-3"  disabled={!recaptcha} style={{cursor:recaptcha ? 'pointer' : 'not-allowed'}}>ورود</button>
             </div>
               </div>  
         </form>

         </div>
         </Fade>
    
    )
}
}