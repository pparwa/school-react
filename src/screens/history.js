import React from 'react'
import self from '../image/self.jpg'
import gym from '../image/gym.jpg'
import '../ihover.css'
export default function History() {
  return (
    <div className='container shadow p-3 mb-5 bg-body rounded'>
     <h3 className='text-md-center text-sm-end py-2'>تاریخچه</h3>
     <div className='row'>
      <div className='col-lg-3 col-md-12 mx-md-auto gallery'>
     <div class="ih-item square effect15 left_to_right"><a href="#">
        <div class="img"><img src={self} alt="img" /></div>
        <div class="info">
          <h3>سلف مدرسه</h3>
          <p>طبقه همکف</p>
        </div></a></div>
        </div>
        <div className='col-lg-3 col-md-12 gallery'>
     <div class="ih-item square effect15 left_to_right"><a href="#">
        <div class="img"><img src={gym} alt="img" /></div>
        <div class="info">
          <h3>سالن ورزشی</h3>
          <p>جنب ساختمان اصلی مدرسه</p>
        </div></a></div>
        </div>
        <div className='col-lg-3 col-md-12 gallery'>
     <div class="ih-item square effect15 left_to_right"><a href="#">
        <div class="img"><img src={self} alt="img" /></div>
        <div class="info">
          <h3>Heading here</h3>
          <p>Description goes here</p>
        </div></a></div>
        </div>
        <div className='col-lg-3 col-md-12 gallery'>
     <div class="ih-item square effect15 left_to_right"><a href="#">
        <div class="img"><img src={self} alt="img" /></div>
        <div class="info">
          <h3>Heading here</h3>
          <p>Description goes here</p>
        </div></a></div>
        </div>

        </div>
     <p className='lh-6' id='building'>
        ساختمان اصلی مدرسه در محیطی به وسعت 1500 متر مربع و در زمینی واقع در ضلع شمالی مسجد جامع قبا، که از مملوکات مسجد می باشد؛ ساخته شده و اکنون در حال بهره برداری است. لازم به ذکر است که در این ساختمان اتاق­ها و سالن­هایی به عنوان کلاس­ درس، خوابگاه، سالن مطالعه، سالن کنفرانس و سمینار، اتاقIT، سالن غذا خوری، اتاق(TV)، دفتر اداری و آموزشی مدرسه و سرویس بهداشتی اختصاص یافته است. با توجه به پتانسیل موجود در این ساختمان جهت اسکان شبانه روزی طلاب برادر و همچنین همت مسئولان و هیأت امنای مسجد و مدرسه جهت جذب و به کارگیری اساتید مطرح و برجسته، این مدرسه می­تواند بیش از 100 طلبه شبانه روزی را از لحاظ آموزشی، اداری و رفاهی تحت پوشش قرار دهد و انتظار می­رود استقبال علاقه مندان به یادگیری علوم دینی از این فرصت کم نظیر فزونی یابد.
     </p>
     <p className='lh-6'  id='library'>
      کتابخانه­ تخصصی مدرسه واقع در طبقه اول مسجد قرار دارد؛ و دارای بیش از 5000 هزار عنوان کتاب در حوزه­های مختلف علوم و معارف اسلامی، ادبیات و... است. که طلاب مدرسه با ارائه کارت طلبگی و عموم علاقه­مندان با عضویت و ارائه کارت عضویت امکان استفاده از این مجموعه با ارزش را دارا هستند.

     </p>
     <p className='lh-6' id='resturant'>
      ین بخش شامل آشپزخانه، سالن غذا خوری و بخش خرید می­باشد که بصورت شبانه روزی و در سه وعده غذاییاا(صبحانه، نهار و شام) به طلاب و حفاظ مدرسه خدمات ارائه می­دهد. آشپز اختصاصی مدرسه، مسئول تهیه و اجرا نمودن برنامه غذایی هفتگی است و پرسنل آشپزخانه  مسئولیت سرو هر وعده غذایی و شستشوی ظروف را برعهده دارند. طلاب و حفاظ بابت وعده­های غذایی هیچ هزینه­ای پرداخت نمی­کنند و خدمات این بخش کاملا رایگان است.

لازم به ذکر است طلاب و حفاظ مدرسه در صورت علاقه­مندی می­توانند با واحد پژوهش و فناوری قبا و همچنین واحد نشریه که زیر نظر مسجد جامع قبا فعالیت می­کنند همکاری نمایند.

     </p>
     <p>

     </p>
    </div>
  )
}
