import React from 'react'
import {motion} from 'framer-motion'
import logomini from '../assets/MainPhotos/1kieliszek.png';

const Footer = () => {
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); 
    
    const targetElement = document.getElementById(targetId); 
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop; 
      const offset = 140;
      window.scrollTo({
        top: offsetTop - offset, 
        behavior: "smooth" 
      });
    }
  };


  return (
    <footer className='grid grid-cols-3 items-center pl-20 pb-20 xl-tablet:grid-cols-1 xl-tablet:pl-0 foot pt-20'>
      <section id="foot_links" className='text-white flex justify-start space-x-8 xl-tablet:justify-center xl-tablet:pl-0 l-phone:space-x-4'>
        <motion.a href="#about" className='red_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(253, 78, 78)",
        }}
        onClick={(event) => smoothScroll(event, "about")}
        >O Nas
        </motion.a>
        <motion.a href="#places" className="yellow_neon"
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(253, 255, 20)",
        }}
        onClick={(event) => smoothScroll(event, "places")}
        >Miejsca
        </motion.a>
        <motion.a href="#contact" className='orange_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(243, 154, 52)",
        }}
        onClick={(event) => smoothScroll(event, "contact")}
        >Kontakt
        </motion.a>
        <motion.a href="/join" className='purple_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(184, 93, 245)",
        }}
        >TeamFuego
        </motion.a>
        <motion.a href="/franchise" className='cyan_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(59, 214, 235)",
        }}
        >Franchise
        </motion.a>

      </section>
      <section className='flex flex-row justify-center w-1/4 mx-auto xl-tablet:hidden'>
          <img src={logomini} alt="logo" className="w-30 h-[100px]" id="foot-logo"/>
      </section>
      <section></section>
    
  </footer>
  )
}

export default Footer