import React from 'react'
import Map from '../assets/MainPhotos/Mapa.png'
import Photo1 from '../assets/Photos/S-New1.png'
import Photo2 from '../assets/Photos/S-New2.png'
import Photo3 from '../assets/Photos/S-New3.png'
import Photo4 from '../assets/Photos/S-New4.png'
import Photo5 from '../assets/Photos/S-New5.png'
import Photo6 from '../assets/Photos/S-New6.png'
import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";


const PlacesUA = () => {
  return (
    <>
    <div id="places" className='text-white flex flex-row justify-center pt-20 items-center h-[700px] l-tablet:flex-col l-tablet:h-full l-tablet:space-x-0'>
    <motion.div className='w-1/2 overflow-hidden items-center justify-center l-tablet:w-9/12 '>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop={true}
        className='pb-20 pt-20 '
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false
         }}
         
        >
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo1} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo2} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo3} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo4} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo5} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Photo6} className=''></img>
          </SwiperSlide>
         
          
        </Swiper>
      </motion.div>
        <div className='h-full'>
            <img src={Map} className='h-full w-full object-contain l-tablet:p-2'></img>
        </div>
    </div>
    <div className='text-white flex flex-col items-center pt-20 text-lg space-y-2' id="local" >
      <p className='text-red-600'>Місцезнаходження </p>
      <p><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4716cf9c7ad47b69:0x762d28cefe92163b?sa=X&ved=1t:8290&ictx=111" target="_blank">Катовице, вулиця Мар'яцька 2 </a></p>
      <p><a href="https://www.google.com/maps/place/Stanis%C5%82awa+Ma%C5%82achowskiego+30,+41-200+Sosnowiec/@50.2764087,19.129491,17z/data=!3m1!4b1!4m6!3m5!1s0x4716dabb79da6199:0x9be4088b0a56e9b7!8m2!3d50.2764053!4d19.1320659!16s%2Fg%2F11c5c8hrq2?entry=ttu" target="_blank">Сосновець, вулиця Станіслава Малаховського 30 </a></p>
      <p><a href="https://www.google.com/maps/place/STREFA+przy+pla%C5%BCy/@54.0251734,14.7451574,17z/data=!3m1!4b1!4m6!3m5!1s0x47aa85292e10ca3f:0x1b6a0a44e993ed64!8m2!3d54.0251703!4d14.7477323!16s%2Fg%2F11kqbwdqkx?entry=ttu" target="_blank">Дзвінов, вулиця Кочановського 4 </a></p>
    </div>
    </>
  )
}

export default PlacesUA