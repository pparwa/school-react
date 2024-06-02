import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registershcema } from '../../component/Utils/Validation';
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function AddPerson() {
   /*const[ Person,Setperson] =useState({
    name:"",
    lastname:"",
    role:"",
    grade:""
   })*/
   const RegisterForm = useFormik({
    initialValues:{
       name:"",
    lastname:"",
    role:"-1",
    pass:"",
    grade:'-2'
    },

   validationSchema:registershcema,

    onSubmit:(values,{ resetForm })=>{
      console.log(values)
       axios.post(`http://localhost:5000/${values.role}s`,values)
        resetForm()
    }
   })
  return (
    <div className='d-flex justify-content-center align-items-center text-center mx-auto' style={{height:"70vh",width:"80vw"}}>
    <div className='d-flex justify-content-center align-items-center border border-primary border-5 ' style={{width:"70vw"}}>
        <h4 className='text-center'></h4>
        <form className='p-5' onSubmit={RegisterForm.handleSubmit}>
            <div class="mb-3 row">
           <label for="name" class=" col-sm-2 col-form-label">نام</label>
           <div class=" col-sm-10">
           <input type="text" class="form-control" name='name' id="name" onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur} value={RegisterForm.values.name}/>
           </div>
           <h5 className='text-danger'>
            {RegisterForm.errors.name && RegisterForm.touched.name && RegisterForm.errors.name}
           </h5>
          </div>
           <div class="mb-3 row">
           <label for="lastname" class=" col-sm-2 col-form-label">فامیل</label>
           <div class=" col-sm-10">
           <input type="text" class="form-control" id="lastname" name='lastname' onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur} value={RegisterForm.values.lastname}/>
           </div>
            <h5 className='text-danger'>
            {RegisterForm.errors.lastname && RegisterForm.touched.lastname && RegisterForm.errors.lastname}
           </h5>
          </div>
           <div class="mb-3 row">
           <label for="nationalcode" class="col-sm-2 col-form-label">کدملی</label>
           <div class="col-sm-10">
           <input type="text" class="form-control" id="nationalcode" name='pass' value={RegisterForm.values.pass}
            onChange={RegisterForm.handleChange}  onBlur={RegisterForm.handleBlur}/>
           </div>
            <h5 className='text-danger'>
            {RegisterForm.errors.pass && RegisterForm.touched.pass && RegisterForm.errors.pass}
           </h5>
          </div>
          <div>
          <select className='mt-3' defaultValue={'-1'}  name='role' onChange={RegisterForm.handleChange}>
            <option   defaultValue={'-1'}>نقش فرد را انتخاب کنید</option>
            <option   Value={'student'}>دانش آموز</option>
            <option   Value={'teacher'}>معلم</option>
          </select>
           <h5 className='text-danger'>
            {RegisterForm.errors.role && RegisterForm.touched.role && RegisterForm.errors.role}
           </h5>
          </div>
          <select className='mt-3' name='grade' onChange={RegisterForm.handleChange}>
            <option   defaultValue={'-2'}>پایه فرد را انتخاب کنید</option>
            <option   Value={1}>اول</option>
            <option   Value={2}>دوم</option>
             <option   Value={3}>سوم</option>
             <option   Value={4}>چهارم</option>
             <option   Value={5}>پنجم</option>
              <h5 className='text-danger'>
            {RegisterForm.errors.grade && RegisterForm.touched.grade && RegisterForm.errors.grade}
           </h5>
          </select>
          
        <div className='d-flex justify-content-center w-100 mt-5'>
          <button className='d-grid btn btn-primary rounded P-4'>ثبت فرد</button>
     <Link to={'/login/admin'}>     <button className='d-grid btn btn-danger rounded P-4'>خروج</button>  </Link>
          </div>
        </form>
        
    </div>
    </div>
  )
}
