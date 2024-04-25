import React from 'react'
import FUEGO from '../assets/MainPhotos/logo.png'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {

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
    <div className='bg-slate-950 flex flex-row justify-between items-center fixed w-full z-50 nav'>
        <Link to="home" className='l-tablet:w-full l-tablet:text-center l-tablet:block'>
            <img src={FUEGO} alt="FUEGO" className='FUEGO l-tablet:mx-auto' />
        </Link>
        <section id="nav_links" className='text-white flex justify-center space-x-20 xl-tablet:space-x-12 l-tablet:hidden xl-tablet:text-lg xl-tablet:pr-14'>
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
        <div className='xl:w-[220px]'>
            {/* This empty div will take up the space on the right, keeping the nav links in the middle */}
        </div>
    </div>
  )
}

export default Navbar