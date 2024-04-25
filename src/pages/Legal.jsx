import React from 'react'
import Background from '../assets/Background/Background.jpg'
import { FixedPhoto } from '../components'
import photo from '../assets/MainPhotos/1kieliszek.png'; // Import your photo
import { motion } from "framer-motion"

const Legal = () => {
  return (
    <>
    <div className='tablet:hidden'>
      <FixedPhoto />
    </div>
    
    <div className='legal_background_container text-s'>
    
        <img src={Background} alt="background" className='legal_background' />
       <div className='relative'>
        <section className='z-10 pr-4 pl-4'>
          <table className='bg-slate-900 border border-stone-300 text-white max-w-[80vh]'>
              <tr>
                  <td className='border-b p-2 pb-4' colSpan={2}>
                      <h1 className='text-red-500 pb-1'>Uwaga!</h1>
                      <p>Cześć, ta strona jest przeznaczona dla dorosłych użytkowników:</p>
                  </td>
              </tr>
              
              <motion.tr className='border-b'
                  whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(252,252,252)",
                  boxShadow: "0px 0px 8px rgb(252,252,252)",
                }}
              
                >
                  <td className='border-r p-4'>
                    <a href="home">Tak</a>
                  </td>
                  <td className='p-2'>
                      <a href="home">Mam ukończone 18 lat i zgadzam się na wykorzystanie ciasteczek</a>
                  </td>
              </motion.tr>
              <motion.tr
                  whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(252,252,252)",
                  boxShadow: "0px 0px 8px rgb(252,252,252)",
                }}
                >
                  <td className='border-r p-4'>
                    <a href="https://www.youtube.com/watch?v=OqA3OzYnr_I">Nie</a>
                  </td>
                  <td className='p-2'>
                      <a href="https://www.youtube.com/watch?v=OqA3OzYnr_I">Nie mam jeszcze 18 lat i chcę opuścić stronę</a>
                  </td>
              </motion.tr>
          </table>
      </section>
      <div className="absolute right-[-30px] bottom-[-30px] tablet:hidden">
        <img src={photo} alt="Fixed Photo" className='fixed_photo' />
      </div>
      </div>
    </div>
      
    </>
  )
}

export default Legal