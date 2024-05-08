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
    <footer className='grid grid-cols-2 items-center pl-20 pb-20 xl-tablet:grid-cols-1 xl-tablet:pl-0 foot pt-20'>
      <section id="foot_links" className='text-white flex justify-start space-x-8 xl-tablet:justify-center xl-tablet:pl-0 l-phone:space-x-4 w-5/8'>
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
        <motion.a href="#gallery" className='pink_neon'
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 20px rgb(255, 182, 193)",
            }}
            onClick={(event) => smoothScroll(event, "gallery")}
            >Galeria
            </motion.a>
        <motion.a href="#contact" className='orange_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(243, 154, 52)",
        }}
        onClick={(event) => smoothScroll(event, "contact")}
        >Kontakt
        </motion.a>
        <motion.a href="#join" className='purple_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(184, 93, 245)",
        }}
        onClick={(event) => smoothScroll(event, "join")}
        >TeamFuego
        </motion.a>
        <motion.a href="#franchise" className='cyan_neon'
        whileHover={{
          scale: 1.2,
          textShadow: "0px 0px 4px rgb(59, 214, 235)",
        }}
        onClick={(event) => smoothScroll(event, "franchise")}
        >Franchise
        </motion.a>

      </section>
      <section className='flex flex-row xl-tablet:hidden xs-pc:justify-end xs-pc:pr-40'>
          <img src={logomini} alt="logo" className="w-30 h-[100px]" id="foot-logo"/>
      </section>
      
    
  </footer>
  )
}

export default Footer