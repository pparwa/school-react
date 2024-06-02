import React, { useEffect, useState } from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useDispatch, useSelector } from "react-redux";
import { addinfo,emptyinfo } from '../../REDUX/Feature/Info';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { number } from 'yup';



const editorConfiguration = {
    width:'auto',
    height:'auto'
};

function AddInfo() {
    var [date,setdate] = useState('')
    var [Info , setInfo] = useState('')
 const infos =  useSelector((state)=>state.infos)
    const dispatch = useDispatch()
   function SendInfo() 
  { 
    const id = uuidv4(); 
      dispatch(addinfo({
     text:Info,
     id:id,
     likenumber:number,
     dislikenumber:number
      }));
  
  }
    var date = new Date().toLocaleString();
    let faFormat = new Intl.DateTimeFormat("fa-IR");
    useEffect(()=>{
        var date = new Date().toLocaleString();
    let faFormat = new Intl.DateTimeFormat("fa-IR");
    setdate(faFormat.format( new Date(date)))
    },[date])

  
  return (  

<div className='d-flex flex-column text-center justify-content-center align-items-center mx-auto position-relative' style={{width:"60vw",height:"80vh"}}>
    <p className='position-absolute top-0 start-0'>{faFormat.format(new Date(date))}</p>
    <h2 className='text-danger fw-bold fst-italic'>اطلاعیه</h2>
  <div style={{ width: 'auto !important;',display:'flex',justifyContent:'center'}}>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<h2>اطلاعات را وارد نمایید!!!</h2>"
        onChange={(event, editor) => {
          setInfo(editor.getData())
        }}
        
       
      />
      </div>
  <Link to='/'>    <button className='btn btn-info w-100' onClick={()=>{SendInfo()}}>ارسال</button> </Link>
      </div>
  )
}

export default AddInfo