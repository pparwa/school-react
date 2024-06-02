import React from 'react';
import { useTimer } from 'react-timer-hook';

export function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '150px'}}>
        <span style={{color:'green',fontSize:'80px'}}>{minutes}</span>:<span style={{color:'green',fontSize:'80px'}}>{seconds}</span>
      </div>
      <p style={{color:`${isRunning ? 'black':'red'}`}}>{isRunning ? 'زمان باقیمانده' : 'ارسال مجدد کد'}</p>
   
    </div>
  );
}
