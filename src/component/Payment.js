import React, { useEffect, useState } from 'react'
import { MyTimer } from './Timer'
import './Payment.css'
import { useNavigate } from 'react-router-dom'
import { UseValue } from '../REDUX/Feature/Value'
import { useFormik } from 'formik';
import { CardValid } from './Utils/Validation'
export default function Payment() {
    const navigate = useNavigate()
    const [value ,setvalue] = useState(null)
     const {state , dispatch} = UseValue()
    const CardInfo = useFormik({
      initialValues:{
 money:"",
 cardnumber:"",
 vnumber:"",
 securitcode:"",
 pass:""
      }
      ,
      validationSchema:CardValid,
      onSubmit:(values )=>{
     if(window.confirm(`آیا از پرداخت مبلغ ریال${values.money}اطمینان دارید`)){
         dispatch({
      type:'set-money',
      money:values.money
    })
     setTimeout(()=>{
     navigate('/payment/check')
    },4000)
      }
    }
  })
    useEffect(()=>{
      
       dispatch({type:'set-number'})
    },[])
 const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  function SendCheck (){
 {
    dispatch({
      type:'set-money',
      money:value
    })
    console.log(state)
    
  }
   
  }
  

  
if(!state.loading){
  return(  <>
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
   
    <div className='payment-parent'>
     <div className='payment-page'>
   <form  onSubmit={CardInfo.handleSubmit}>
       <div className='payment-info'>
            <div className='card-payment' >
      <label>
        مبلغ کمک
      </label>
      <input  className='icon' name='money'id='money'
       placeholder='مبلغ کمک را وارد نمایید به ریال' onChange={CardInfo.handleChange}
       onBlur={CardInfo.handleBlur} value={CardInfo.values.money}/>
       <h5 className='text-danger'>
        {CardInfo.errors.money && CardInfo.touched.money && CardInfo.errors.money}
       </h5>
    </div>
        <div className='card-payment'>
          <label>شماره کارت</label>
          <input className='icon' name='cardnumber' id='cardnumber' value={CardInfo.values.cardnumber}
          onChange={CardInfo.handleChange} onBlur={CardInfo.handleBlur}></input>
          <h5>{CardInfo.errors.cardnumber && CardInfo.touched.cardnumber && CardInfo.errors.cardnumber}</h5>
          </div>
          <div className='date-payment'>
           < div className='date-payment-code'>
          <label>cvv2</label>
          <input className='icon1' type='number' name='vnumber' id='vnumber' value={CardInfo.values.vnumber}
          onChange={CardInfo.handleChange} onBlur={CardInfo.handleBlur}></input>
          </div>
         < div className='date-payment-date'>
          <label>تاریخ انقضا</label>
          <input className='icon1' type='date'></input>
          </div>
          </div>
        <div className='random-payment'>
          <div className='random-payment-cadr'>
            <label>کد امنیتی</label>
            <input  className='icon' name='securitcode' id='securitcode' value={CardInfo.values.securitcode}
            onBlur={CardInfo.handleBlur} onChange={CardInfo.handleChange} ></input>
          </div>
          <div style={{width:'30%',border:'2px solid black',marginLeft:'10rem'}}><p className='text-center mt-3 fs-3'>{state.Randomnumber && state.Randomnumber} </p></div>
        </div>
        <div className='get-pass'>
          <div className='get-pass-box'>
            <label>رمز پویا</label>
            <input className='icon' name='pass' id='pass' value={CardInfo.values.pass}
            onChange={CardInfo.handleChange} onBlur={CardInfo.handleBlur}/>
          </div>
          <div className='box'>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/sent--v1.png" alt="sent--v1"/>
          </div>
          
          
        </div>
          <div className='date-payment'>
           < div className='date-payment-code'>
          <label>ایمیل اختیاری</label>
          <input className='icon1' type='email'></input>
          </div>
         < div className='date-payment-date'>
          <label>تلفن همراه</label>
          <input className='icon1' type='tel'></input>
          </div>
          </div>
          <div className='d-flex justify-content-center align-items-center w-100 gap-2 mb-2'>
           <button className='btn btn-success text-center text-white' style={{width:'70%'}} type='submit'>خرید</button>
           <button className='btn btn-danger text-center text-white' style={{width:'20%'}}>انصراف</button>
          </div>
       </div>
       </form>
     </div>
    </div>
    </>

)}
else{
return(
  <div className='d-flex align-items-center justify-content-center' style={{height:'100vh',width:'100vw'}}>
<div class="spinner-border" role="status">
  <span class="sr-only" style={{fontSize:'10rem'}}>Loading...</span>
</div>
  </div>
)
}
  
  
}
