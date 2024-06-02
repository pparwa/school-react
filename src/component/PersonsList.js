import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux';
import { SetPerson } from '../REDUX/Feature/Students';
function PersonsList(props) {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.Persons)
  function EditPerson(person){
    dispatch(SetPerson(person));
  }
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">نام</th>
      <th scope="col">نام خانوادگی</th>
      <th scope="col">پایه تحصیلی</th>
    </tr>
  </thead>
  <tbody>
    {props.list && props.list.map(person =>(
        <tr>
             <th scope="row">{person.id}</th>
               <td>{person.name}</td>
               <td>{person.lastname}</td>
               <td>{person.grade}</td>
               <td className='d-flex justify-content-start'>

          <Link to={`/login/admin/editperson/${person.id}`}>  <button className='btn btn-info p-2' onClick={()=>EditPerson(person)}>ویرایش</button></Link>
             <Link to={`/login/admin/editperson/${person.id}`}><button className='btn btn-danger p-2'>حذف</button> </Link> 
             </td>
        </tr>
    ))}
  </tbody>
</table>
  )
}

export default PersonsList