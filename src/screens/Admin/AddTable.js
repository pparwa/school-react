import React, { useState } from 'react'
import AdminTable from '../../component/AdminTable'
function AddTable() {
 const [grade , setgrade] = useState('')
  return (
<div className='mx-auto'>
      <div className='d-flex justify-content-center align-items-center mx-auto'  style={{width:"50vw",height:"20vh"}}>
        <select className='mt-3' name='grade'  onChange={(event)=>{setgrade(event.target.value)}}>
            <option   defaultValue={'-2'}>پایه فرد را انتخاب کنید</option>
            <option   Value={'first'} >اول</option>
            <option   Value={'second'}>دوم</option>
             <option   Value={'third'}>سوم</option>
             <option   Value={'fourth'}>چهارم</option>
             <option   Value={'fifith'}>پنجم</option>
              
          </select>
    </div>
    <AdminTable grade={grade} />
    </div>
  )
}

export default AddTable