import React, { useState } from 'react'

function AdminSearchBar(props) {
  return (
    <div className='mx-auto mt-4' style={{width:"60vw"}}>
        <input className='form-control' onChange={(event)=>props.Search(event)} placeholder='نام مورد نظررا وارد نمایید' value={props.SearchValue}></input>
    </div>
  )
}

export default AdminSearchBar