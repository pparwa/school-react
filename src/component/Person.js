import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import axios from 'axios'
function Person(props) {
const navigate = useNavigate()
const [person , setperson] = useState({})
const data = useSelector((state)=>state.Persons)
async function  EditPerson(event){
  event.preventDefault()
   console.log(person)
   axios.put(`http://localhost:5000/${person.role}/${person.id}`,person).then(
    response=>console.log(response)
   )
    navigate('/login/admin')
}
useEffect(()=>{
  
   setperson(data)
 
  
},[])


  return (
    <>
  <div className='d-flex justify-content-center align-items-center mx-auto border border-3 brder-secondary mt-2' style={{width:'70vw',height:"80vh"}}>
    <form>
    <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label mt-3">نام</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="staticEmail" onChange={(event)=>{setperson({...person,name:event.target.value})}} value={person && person.name} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label mt-3">فامیل</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword" onChange={(event)=>{setperson({...person,lastname:event.target.value})}}  value={person && person.lastname}/>
    </div>
     <select class="form-select mt-3" aria-label="Default select example" dir="ltr"
                 name="role" defaultValue={person && person.role} onChange={(event)=>{setperson({...person,role:event.target.value})}} >
                <option defaultValue={person && person.role}>{person && person.role}</option>
             <option value="students">دانش آموز</option>
              <option value="teachers">معلم</option>
              <option value="Admin">ادمین</option>
</select>
 <select class="form-select mt-3" aria-label="Default select example" dir="ltr"
                 name="role" defaultValue={person && person.grade} onChange={(event)=>{setperson({...person,grade:event.target.value})}} >
                <option defaultValue={person && person.grade}>{person && person.grade}</option>
             <option   Value={'first'}>اول</option>
            <option   Value={'second'}>دوم</option>
             <option   Value={'third'}>سوم</option>
             <option   Value={'fourth'}>چهارم</option>
             <option   Value={'fifith'}>پنجم</option>
</select>
  <button className="btn btn-info p-2 mx-auto mt-5" onClick={(event)=>EditPerson(event)}>ویرایش</button>
  </div>
  </form>
  </div>
    </>
  )
}

export default Person