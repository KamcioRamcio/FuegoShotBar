import React, { useRef, useEffect } from 'react'
import film from '../assets/Films/T-Film.mp4'

const FilmEN = () => {
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
    <div className='flex justify-center pt-[100px] object-cover max-h-[1000px] max-w-[1900px]'>
      <video autoPlay playsInline ref={videoRef} onClick={handleVideoClick} onDoubleClick={handleVideoDoubleClick}>
        <source src={film} type="video/mp4" />
      </video>
    </div>
  )
}

export default FilmEN