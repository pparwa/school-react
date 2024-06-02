import React from 'react'
import Typewriter from "typewriter-effect";
import slide_one from '../image/1.jpg';
import slide_two from '../image/2.jpg'
import slide_three from '../image/3.jpg'
import logo from '../image/logo.jpg'
import Navbar from '../component/Navbar';
import MySlider from '../component/info/slide';
import Footer from '../component/Footer';
import { Fade } from 'react-awesome-reveal';
export default function Home() {
  return (
    <>
    <div>
    <Navbar />
    <div>
     < div className='text-center ' id='type' style={{height:'14vh',fontSize:'40px'}}>
         <Typewriter
                options={{
    strings: ['به مدرسه', 'فردای بهتر','خوش آمدید'],
    autoStart: true,
    loop: true,
    
  }}
              
            />

      </div>
      <MySlider /> 
  
      <section className='container-fluide carousel'>
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide_one} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>نمای بالایی</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide_two} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>نمای روبرویی</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide_three} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>نمای اصلی</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </section>
      <Fade delay={1500}>
      <section className='location text-center bg-light ' style={{height:"10vh"}}>
        <h3 className='mt-3'>Addres</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d704.4160768015079!2d47.00395104403656!3d35.320984709753056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997dece955555%3A0xd6de3489da2a2317!2z2KfYr9in2LHZhyDaqdmEINii2YXZiNiy2LQg2Ygg2b7YsdmI2LHYtCDYp9iz2KrYp9mGINqp2LHYr9iz2KrYp9mGKNio25XalduO2Yjbldio2LHYp9uM25XYqtuMINm-2LHZiNix2K_blSDar9i02KrbjCDZvtin2pXbjtiy2q_Ypyk!5e0!3m2!1sen!2s!4v1706776593168!5m2!1sen!2s" style={{height:"15vh",width:"80vw"}}></iframe>
      </section>
      </Fade>
    </div>
  </div>
  <Fade delay={2000}>
  <Footer />
  </Fade>
  </>
  )
}
