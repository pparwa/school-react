import React, { useContext, useEffect } from 'react'
import { usercontext } from '../App'
import axios from 'axios'
export default function StudentPoints() {
    const {state} = useContext(usercontext)
    useEffect(()=>{

    },[state])
  return (
    <div>StudentPoints</div>
  )
}
