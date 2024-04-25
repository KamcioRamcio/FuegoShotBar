import React from 'react'
import {motion} from 'framer-motion'
import PlaceHolder from '../assets/Photos/G-New4.png'
import Pion1 from '../assets/Films/T-Pion1.mp4'
import Pion2 from '../assets/Films/T-Pion2.mp4'
import Pion3 from '../assets/Films/T-Pion3.mp4'
import { useRef, useState, useInView } from 'react';


const ContactUA = () => {
    
      const [isPlaying, setIsPlaying] = useState(true);
      const videoRefs = {
        pion1: useRef(null),
        pion2: useRef(null),
        pion3: useRef(null),
      };
    
      const togglePlay = (videoKey) => {
        const video = videoRefs[videoKey].current;
        if (video) {
          if (isPlaying) {
            video.pause();
          } else {
            video.play();
          }
          setIsPlaying(!isPlaying);
        }
      };


  return (
    <motion.div className='flex flex-row items-center justify-center pb-10 space-x-28 l-tablet:space-x-20 tablet:flex-col tablet:space-x-0' id="contact">
        <div className='flex flex- space-x-6 tablet:space-x-0'>
            <video 
            src={Pion1}
            autoPlay
            loop
            muted
            playsInline
            ref={videoRefs.pion1}
            onClick={() => togglePlay('pion1')}
            id='pion1'
            className='s-pc:hidden'
            >
            </video>
            <video 
            src={Pion2}
            id='pion-2'
            autoPlay
            loop
            muted
            playsInline
            ref={videoRefs.pion2}
            onClick={() => togglePlay('pion2')}
            className='l-tablet:hidden'
            >
            </video>
            <video 
            src={Pion3}
            autoPlay
            loop
            muted
            playsInline
            onClick={() => togglePlay('pion3')}
            id='pion3'
            ref={videoRefs.pion3}
            className='l-tablet:w-64'
            >
            </video>
        </div>
        
        <div className='flex flex-col items-center text-xl space-y-14 text-center tablet:pt-10 pb-10 lg:pr-8 tablet:pr-20'>
          <p>
            <em className='text-white'>Контакт </em>
            <br />
            <a href="mailto:biuro@fuegoshotbar.com" className='text-red-600 font-bold'>biuro@fuegoshotbar.com</a>
          </p>
          <p>
            <em className='text-white'>Instagram</em>
            <br />
            <a href="https://www.instagram.com/fuego.katowice/?ig_mid=ACDD6343-DBF0-42A7-9489-F7E7E65DC429" className='text-red-600 font-bold'>Fuego Катовице </a>
            <br />
            <a href="https://www.instagram.com/fuego.sosnowiec" className='text-red-600 font-bold'>Fuego Сосновице </a>
            <br/>
            <a href="https://www.instagram.com/fuego.dziwnow/" className='text-red-600 font-bold'>Fuego Дзвінов</a>     
          </p>
          <p>
            <em className='text-white'>Facebook</em>
            <br />
            <a href="https://www.facebook.com/FuegoKatowice/" className='text-red-600 font-bold'>Fuego Катовице </a>
            <br/>
            <a href="https://www.facebook.com/p/fuegososnowiec-61553377552442/" className='text-red-600 font-bold'>Fuego Сосновице</a>
            <br/>
            <a href="https://www.facebook.com/profile.php?id=61559101731542" className='text-red-600'>Fuego Дзвінов</a>
          </p>
        </div>
        </motion.div>
  )
}

export default ContactUA