import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from "react-redux";
import './MySlide.css'
import img from "../../img/info.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { increselike } from "../../REDUX/Feature/Info";
export default function MySlider(){
  const infos = useSelector((state)=>state.infos)
  const dispatch = useDispatch()
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 let [slides , SetSlide] = useState()
 let [time , SetDate] = useState('')
 function SetLike(id)
 {
  dispatch(increselike(id))
  
  

 }
 useEffect(()=>{
    SetSlide([])
    //SetDate(new Intl.DateTimeFormat('fa-IR').format(d))
    var date = new Date().toLocaleString();
    let faFormat = new Intl.DateTimeFormat("fa-IR");
    SetDate(faFormat.format( new Date(date)))
    SetSlide(infos.data)
    console.log(slides)
    console.log(time)
  },[slides])
return(
    <>
   <Swiper
   
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
          loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }}
    
>  
{slides && slides.map((slide)=>(
  
      <SwiperSlide>
<div class="card">
  <img class="card-img-top" src={img} alt="Card image cap" style={{width:'100%'}}/>
  <div class="card-body">
    <h4 className="card-title">{time}</h4>
  
        <div dangerouslySetInnerHTML={{__html:slide.text}}></div>
    <div className="d-flex justify-content-end">
    <a href="#"   ><img width="50" height="50" src="https://img.icons8.com/ios/50/facebook-like--v1.png" alt="facebook-like--v1" id={slide.id}
    onClick={(event)=>SetLike(event.target.id,dispatch)}/></a>
       <a href="#"  id={slide.id}><img width="50" height="50" src="https://img.icons8.com/dotty/80/thumbs-down.png" alt="thumbs-down" /> </a>
       <a href="#"   id={slide.id}><img width="50" height="50" src="https://img.icons8.com/ios/50/share--v1.png" alt="share--v1"/></a>
    </div>
  </div>
</div>
   </SwiperSlide>

      
  ))
  }
  
  </Swiper>
  </>
)

}
