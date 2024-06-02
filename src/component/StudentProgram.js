import React from 'react'
import { usercontext } from '../App'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
export default function StudentProgram() {
    const {grade} = useParams()
     if(grade == '1')
     {
      return(
        <div>hello</div>
      )
     }
     else if(grade =='2')
     {
      return(
        <div>hi</div>
      )
     }
}
