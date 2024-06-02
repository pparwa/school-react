import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Practice.css'

export default function Practice() {
    const {id} = useParams()
    const [file , setfile] = useState()
    const [progress , setprogress] = useState({
        start:false,
        pc:0    })
    const [msg , setmsg] = useState()
    
  const  SendPracticeFile = (grade)=>{

        const Form = new FormData()
        Form.append('file',file)
        axios.post(` http://localhost:5000/Practice`,Form,{
          onUploadProgress:(ProgressEvent)=>{setprogress({...progress,pc:ProgressEvent.progress*100})

          }
        }).then((res)=>{
          if(res.status>=200 && res.status<400)
          {
            setmsg('فایل با موفقیت بارگذاری شد')
            setprogress({...progress,start:true})
            console.log(progress)
          }
        })
    
       
  }   
  
  return (
    <div className='practice-parent'>
         <h4>تکلیف را بارگذاری نمایید</h4>
        <div class="triangle-down"></div>
    
   
     <input type='file'    onChange={(event)=>setfile(event.target.files[0])}       multiple />
     <button className='Practice-btn'  onClick={(id)=>SendPracticeFile(id)}>بارگذاری</button>
     {
      
      progress.pc > 0 &&
      <progress value={progress.pc} max="100" ></progress>
     }
     {
      msg && <h3 className='text-success'>{msg}</h3>
     }

    </div>
  )
}
