import React from 'react'

export default function TeacherRings(props) {
  return (
    
       <div class="btn-group d-flex justify-content-center mx-auto mt-3" role="group" aria-label="Basic outlined example" style={{width:"90%"}}>
  <button type="button" class="btn btn-outline-primary"  name='first' onClick={(event)=>{props.list(event)}}>زنگ اول</button>
  <button type="button" class="btn btn-outline-primary"  name='second' onClick={(event)=>{props.list(event)}}>زنگ دوم</button>
  <button type="button" class="btn btn-outline-primary"   name='third'  onClick={(event)=>{props.list(event)}}>زنگ سوم</button>
  <button type="button" class="btn btn-outline-primary"   name='fourth'  onClick={(event)=>{props.list(event)}}>زنگ چهارم</button>
</div>
  )
}
