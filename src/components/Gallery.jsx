import React from 'react'
import {motion} from 'framer-motion'
import Bar1 from '../assets/Photos/G-Bar1.jpg'
import Bar2 from '../assets/Photos/G-Bar2.jpg'
import New1 from '../assets/Photos/G-New1.png'
import New2 from '../assets/Photos/G-New2.png'
import New3 from '../assets/Photos/G-New3.png'
import New4 from '../assets/Photos/G-New4.png'
import New5 from '../assets/Photos/G-New5.png'
import New6 from '../assets/Photos/G-New6.png'


const Gallery = () => {
  return (
    <div id="gallery">
      <motion.div className='gallery gallery1' id="album">
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={Bar1} alt='photo1' id="photo1"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={Bar2} alt='photo2' id="photo2"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={New1} alt='photo3' id="photo3"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={New2} alt='photo4' id="photo4"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={New3} alt='photo5' id="photo5"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={New4} alt='photo6' id="photo6"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4}}
        transition={{ duration: 0.6 }}
        >
          <img src={New5} alt='photo7' id="photo7"/>
        </motion.a>
      
        <motion.a href="https://www.instagram.com/fuego.katowice/?ig_mid=0E97500D-8071-4E5F-8E3F-45742B5E2D31"
        whileHover={{ scale: 1.4 }}
        transition={{ duration: 0.6 }}
        >
          <img src={New6} alt='photo8' id="photo8"/>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Gallery