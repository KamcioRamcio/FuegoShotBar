import React from 'react'
import {motion} from 'framer-motion'
import shot from '../assets/MainPhotos/1kieliszek.png'
import Photo1 from '../assets/Photos/S-New1.png'
import Photo2 from '../assets/Photos/S-New2.png'
import Photo3 from '../assets/Photos/S-New3.png'
import Photo4 from '../assets/Photos/S-New4.png'
import Photo5 from '../assets/Photos/S-New5.png'
import Photo6 from '../assets/Photos/S-New6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  return (
    <div className='w-full flex flex-row text-white pt-20 space-x-14 justify-center items-center l-tablet:flex-col l-tablet:space-x-0 tablet:pt-0' id="about">
      <motion.div className='xl-tablet:hidden p-10'>
        <img src={shot} className='shot_about'></img>
      </motion.div>
      <motion.div className='w-1/3 overflow-hidden items-center justify-center l-tablet:w-9/12 '>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        className='pb-20 pt-20 '
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
      <motion.div className=' text-white pr-10 l-tablet:text-center l-tablet:pt-12 l-tablet:pr-8 l-tablet:pl-8 space-y-1 text-[16px]' id="about_text"
        >
          <p>Fuego nie jest standardowym grzecznym miejscem, </p>
          <p>które nie da się w żaden sposób zaszufladkować.</p>
          <p>To shot bar, który nie boi się eksperymentować i prowokować zmysłów.</p>
          <p>Tutaj nie ma miejsca na nudę i schematy</p>
          <p>FUEGO idzie za głosem serca i bawi się życiem według własnych zasad.</p>
          <p>Fuego nic nie musi...</p>
          <p>Fuego żyje według scenariusza, </p>
          <p>który napisały jego pragnienia.</p>
          <p>Fuego idzie za głosem serca, </p>
          <p>rozum gubiąc po drodze...</p>
          <p>Fuego uwielbia shot'y i eksperymenty</p>
          <p>zatraca się muzyce i tańcu </p>
          <p>emocje rozpalając do czerwoności podczas każdej wizyty. </p>
          <p>Z Fuego nie ma miejsca na żale</p>
          <p>After all no regrest...</p>
          <p>Uwolnij emocje z FUEGO</p>
          <p>Take a shot</p>
          <p className='text-red-500 font-bold'>FUEGO</p>
        </motion.div>
    </div>
  )
}

export default About