import React, { useRef, useEffect } from 'react'
import film from '../assets/Films/T-Film.mp4'
import { motion } from "framer-motion"

const FilmUA = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1; 
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  const handleVideoDoubleClick = (event) => {
    event.preventDefault();
  }

  return (
    <motion.div 
      className='flex justify-center pt-[100px] object-cover max-h-[1000px] max-w-[1900px]'
      initial={{ y: '100vh' }} // start from the bottom
      animate={{ y: 0 }} // animate to the top
      transition={{ type: 'spring', stiffness: 50, delay: 0.5 }} // adjust the transition as needed
    >
      <video autoPlay playsInline ref={videoRef} onClick={handleVideoClick} onDoubleClick={handleVideoDoubleClick}>
        <source src={film} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default FilmUA