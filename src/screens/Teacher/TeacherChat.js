import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Chat.css'
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default function TeacherChat() {
    const {id , grade} = useParams()
    const user = useSelector(state => state.User)
    const [msg , setmsg] = useState({
      id:null,
      personid:null,
      grade:null,
      text:'',
      name:'',
      role:''
    })
    const [Chats ,SetChats] = useState([])
    
 const loc = useLocation()
 async function FetchTeacher(id){
  const res = await axios.get(`http://localhost:5000/teachers?id =${id}`)
  const data = await res.data[0]
  setmsg({...msg,personid:data.id,grade:data.grade,name:data.name,role:data.role})
 
 } 
 
async function Sendmsg(){
  const id = uuidv4()
  setmsg({...msg,id:id})
  const res = await axios.post(` http://localhost:5000/Practice`,msg)
  //console.log(res)    
    
 }
async function GetTexts(SetChats,id,grade){
 
  const res =await axios.get(` http://localhost:5000/Practice`)
  const data = await res.data
  
   const chats = data.filter(chat=>chat.grade === +grade)
  SetChats(chats) 


}

   useEffect(()=>{
    
     if(loc.pathname.includes(`teacher`)){
      FetchTeacher(id)
     }else{
      console.log(user)
       setmsg({...msg,personid:user.id,name:user.name,grade:user.grade})
       console.log(msg)
     }
        
   },[])
   useEffect(()=>{
    GetTexts(SetChats,id,grade)


   }
   ,[Chats.length,Chats])
  return (
    <>
     <h2 className='text-center mt-1'>صفحه چت  پایه{grade}</h2>
    <div className='chat-parent' id='chat-parent' style={{height:'100%',overflowX:'hidden'}} >
     
      <div className='chat-page' style={{width:"90%",margin:'auto',marginTop:'0.75rem'}}>
      {(Chats&&msg) && Chats.map(chat => 
      <div  className='d-flex' style={{width:'100%',height:"15vh",direction:`${chat.personid == +id ? 'rtr':'ltr'}`}}>
        <div className='profile' style={{direction:`${chat.personid == +id ? 'rtr':'ltr'}`}}>
          <img src="https://img.icons8.com/ios/50/user--v1.png" alt="user--v1" />
          <p className='text-center p-0 m-0'>{chat.role}</p>
          <p className='text-center p-0 m-0'>{chat.role == 'teacher' ? 'parwa' : chat.name}</p>
        </div>
        <div className={`mt-2 mx-2`} style={{width:'15%',height:'30%',borderRadius:"10px 10px 10px 10px",backgroundColor:`${chat.personid== +id ?` DodgerBlue `: `LightGray`}`}}>
              <p className='text-center'>{chat.text}</p>
        </div>
        </div>)}

 <div className='chat-type'>
        <button onClick={()=>Sendmsg()}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO3UvUqcURAG4Ae0XDC3oHfhLUhMLBREQSEQQxZSBQTBSkG8gC1FLAQLC5sNXoAEwm4I2SJpAulSBIT1BxRUVD6YhZOPZX++XYuAAwPnDOe878w75wzP9q+NYwNHhmglrOAEd3jA1qCgI5jCIa4CtOX3mCgKPIkdnOYAf+Bb7L8U1bWRy/RvVPAWL/Ez4h+K6vqASxxjFdMBnPmbqOQaL/rV9QY1bGMmAX2NpVjvx9lqp6yrbXStYD4BbfkiDhLCP3Fvrpss9Th4hndtgDNfw28sx/5j3MkaP9qL9rW40MT7BDjTfA+3WE/in+L8bjfwTiQL+Bqx/QQ8k+g84tkTVoTkInn33/EqIdiM+K9+wFOSRtL4ZlSS9uPzoKOhFA1t/YFyAj4fT3ig0ZCvpJmQVIqOhl4aX+53NPRKUk/+yX38+LFhEeQr6ToahkEy+xQEgiTLvuto+P/tEQ4bgs5VrLIwAAAAAElFTkSuQmCC" /></button>
         <input placeholder='پیام خودرا وارد نمایید' value={msg.text} onChange={(event)=>{setmsg({...msg,text:event.target.value})}}></input>
       </div>
      </div>
       


      
    </div>
    </>
  )
}
