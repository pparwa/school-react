import React from 'react'

function TeacherList(props) {
    console.log(props.students)
  return (
    <div className='d-flex justify-content-center align-items-center'>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">نام</th>
      <th scope="col">نام خانوادگی</th>
      <th scope="col" className='text-end'>{props.lesson}</th>
        <th scope="col">نمره درس</th>
    </tr>
  </thead>
  <tbody>
   {props.students && props.students.map((student , index)=>{
return <tr>
      <th scope="row">{index + 1}</th>
      <td>{student.name}</td>
      <td>{student.lastname}</td>
      <td><input name={props.lesson} id={student.id} onChange={(event)=>console.log(event.target.name)} value=''/></td>
      <td><button className='btn btn-success'>تایید</button></td>
    </tr>

   })
   }
  </tbody>
</table>
    </div>
  )
}

export default TeacherList