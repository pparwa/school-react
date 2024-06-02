import React from 'react'

function AddPointsChoice(props) {
    console.log(props.grade)
if(props.grade == 1){
  return (
    <div class="btn-group d-flex justify-content-center mx-auto mt-3" role="group" aria-label="Basic outlined example" style={{width:"90%"}}>
  <button type="button" class="btn btn-outline-primary" onClick={(event)=>props.students(event)} name='math' >ریاضی</button>
  <button type="button" class="btn btn-outline-primary"  onClick={(event)=>props.students(event)} name='writing'>نگارش</button>
  <button type="button" class="btn btn-outline-primary"  onClick={(event)=>props.students(event)} name='sicence'>علوم</button>
  <button type="button" class="btn btn-outline-primary"   onClick={(event)=>props.students(event)} name='sport'>ورزش</button>
</div>
  )
}
}

export default AddPointsChoice