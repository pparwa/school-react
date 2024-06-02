import React, { useEffect } from 'react'
import './Check.css'
import { UseValue } from '../REDUX/Feature/Value'
import { useNavigate } from 'react-router-dom'
export default function Check() {
  const {state} = UseValue()
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
navigate('/')
    },[6000])
  },[])
  return (
    <div className='check-parent'>
        <div className='check-parent-value'>
          <h2 className='text-success'>مبلغ{state && state.money}با موفقیت پرداخت شد</h2>
          <p>:کدرهگیری</p>
          <span>{state.id && state.id}</span>
        </div>
    </div>
  )
}
