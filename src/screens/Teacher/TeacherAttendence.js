import React, { useState } from 'react'
import TeacherRings from '../../component/TeacherRings'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function TeacherAttendence() {
    const {id} = useParams()
    const [Students , setStudents] = useState([])
     const [presnt , setpresnt] = useState(false)
 async function GetList(event){
   console.log(event.target.name)
   axios.get(` http://localhost:5000/students?grade=${id}`)
   .then(response => setStudents(response.data))
   console.log(Students)
  }
  return (
    <>
    <TeacherRings  list={GetList}  />
     <div className='d-flex justify-content-center align-items-center'>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">نام</th>
      <th scope="col">نام خانوادگی</th>
      <th scope="col" className='text-end'>وضعیت</th>

    </tr>
  </thead>
  <tbody>
   {Students && Students.map((student , index)=>{
return <tr>
      <th scope="row">{index + 1}</th>
      <td>{student.name}</td>
      <td>{student.lastname}</td>
      <td><button className='btn' style={{backgroundColor: presnt ? "green" : "red",}} 
      onClick={()=>setpresnt(!presnt)} onDoubleClick={(event)=>{console.log(event.target.id)}}id={student.id}>{
        presnt ? 'حاضر' : 'غایب'
      }</button></td>
    </tr>

   })
   }
  </tbody>
</table>
    </div>
    </>
  )
}

export default TeacherAttendence