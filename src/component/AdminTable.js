import React, { useState } from 'react';
import axios from 'axios';

export default function AdminTable(props) {
  console.log(props.grade)
  const [program , setprogram] = useState({
    sat:[],
    sun:[],
    mo:[],
    tu:[],
    wed:[]
  })
    const sun = []
    const mon = [];
    const tu = [];
    const wed= [];
    function MakeArray(event){
    
        switch(event.target.name){
             case 'sat':{
                  if(program.sat[event.target.id - 1]){
                     let newsat = [...program.sat]
                     newsat[event.target.id - 1] = ''
                     newsat[event.target.id - 1] = event.target.value
                     setprogram({...program,sat:newsat})
                  
                  }
                  else{
                 setprogram({...program,sat:[...program.sat,event.target.value]})
                  }
             }
             break;
             case 'sun':{
                if(program.sun[event.target.id -1])
                {
                  let newsun = [...program.sun]
                  newsun[event.target.id - 1] = ''
                  newsun[event.target.id - 1] = event.target.value
                  setprogram({...program,sun:newsun})
                }else{
                
                setprogram({...program,sun:[...program.sun,event.target.value]})
             }
             }
             break;
             case 'mo':{
                
             if(program.mo[event.target.id - 1])
             {
               let newmon = [...program.mo]
               newmon[event.target.id - 1] = ''
               newmon[event.target.id - 1] = event.target.value
               setprogram({...program,mo:newmon})
             }else{
              setprogram({...program,mo:[...program.mo,event.target.value]})
             }
             }
             break;
             case 'tu':{
              if(program.tu[event.target.id - 1]){
                let newtues = [...program.tu]
                newtues[event.target.id - 1] = ''
                newtues[event.target.id - 1] = event.target.value
                setprogram({...program,tu:newtues})
              }else{
               setprogram({...program,tu:[...program.tu,event.target.value]})
              }
               
             }
             break;
             case 'wed':{
                  if(program.wed[event.target.id - 1])
                  {
                   let newwed = [...program.wed]
                   newwed[event.target.id - 1] = ''
                   newwed[event.target.id - 1] = event.target.value
                   setprogram({...program,wed:newwed})
                  }else{
                  setprogram({...program,wed:[...program.wed,event.target.value]})
                  }
             }

        }
    }
  return (
    <>
    <div className='d-flex justify-content-center-align-items-center mx-auto mt-3' style={{width:"70vw"}} >
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
      <th scope="col">4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">شنبه</th>
      <td><input name='sat' onBlur={(event)=>MakeArray(event)} id='1'></input></td>
      <td><input name='sat' onBlur={(event)=>MakeArray(event)} id='2'></input></td>
      <td><input name='sat' onBlur={(event)=>MakeArray(event)} id='3'></input></td>
      <td><input name='sat'   onBlur={(event)=>MakeArray(event)} id='4'></input></td>
    </tr>
    <tr>
      <th scope="row">یکشنبه</th>
     <td><input name='sun' onBlur={(event)=>MakeArray(event)} id='1'></input></td>
      <td><input name='sun' onBlur={(event)=>MakeArray(event)} id='2'></input></td>
      <td><input name='sun' onBlur={(event)=>MakeArray(event)} id='3'></input></td>
      <td><input name='sun'   onBlur={(event)=>MakeArray(event)} id='4'></input></td>
    </tr>
    <tr>
      <th scope="row">دوشنبه</th>
       <td><input name="mo" onBlur={(event)=>MakeArray(event)} id='1'></input></td>
      <td><input name='mo' onBlur={(event)=>MakeArray(event)} id='2'></input></td>
      <td><input name='mo' onBlur={(event)=>MakeArray(event)} id='3'></input></td>
      <td><input name='mo'   onBlur={(event)=>MakeArray(event)} id='4'></input></td>
    </tr>
    <tr>
      <th scope="row">سه شنبه</th>
       <td><input name="tu" onBlur={(event)=>MakeArray(event)} id='1'></input></td>
      <td><input name='tu' onBlur={(event)=>MakeArray(event)} id='2'></input></td>
      <td><input name='tu' onBlur={(event)=>MakeArray(event)} id='3'></input></td>
      <td><input name='tu'   onBlur={(event)=>MakeArray(event)} id='4'></input></td>
    </tr>
    <tr>
      <th scope="row">چهارشنبه</th>
       <td><input name="wed" onBlur={(event)=>MakeArray(event)} id='1'></input></td>
      <td><input name='wed' onBlur={(event)=>MakeArray(event)} id='2'></input></td>
      <td><input name='wed' onBlur={(event)=>MakeArray(event)} id='3'></input></td>
      <td><input name='wed'   onBlur={(event)=>MakeArray(event)} id='4'></input></td>
    </tr>
  </tbody>
</table>
<br></br>
    </div>
<div className='d-flex justify-content-center align-items-center'>
  <button className='btn btn-success mx-auto' onClick={()=>{console.log(program)}}>ویرایش</button>
  </div>

   </> 
  )
}


