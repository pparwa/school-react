import React from 'react'


function AdminGroup(props) {
  return (
       <div class="btn-group d-flex justify-content-center align-item" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary" name='teachers' onClick={(event)=>{props.getName(event)}}>معلم</button>
  <button type="button" class="btn btn-outline-primary" name='students' onClick={(event)=>{props.getName(event)}}>دانش آموز</button>
</div>
  )
}

export default AdminGroup