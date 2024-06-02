import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='container-fluied footer-container bg-primary positon-static' style={{height:"10vh"}}>
        <h4 className='text-white text-center mt-1'>ارتباط با ما</h4>
    <div className='d-flex justify-content-around mt-4'>
        <i class="fa-brands fa-telegram" ></i>
      <i class="fa-brands fa-instagram"></i>
       <i class="fa-brands fa-whatsapp"></i>
       <i class="fa fa-phone" aria-hidden="true"></i>
       </div>
    </div>

  )
}

export default Footer