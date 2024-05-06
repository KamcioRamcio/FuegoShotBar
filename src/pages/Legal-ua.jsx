import React from 'react'
import logo from '../assets/MainPhotos/logo.png'
import { FixedPhotoUA } from '../components-ua'
import photo from '../assets/MainPhotos/1kieliszek.png'; // Import your photo
import { motion } from "framer-motion"

const LegalUA = () => {
  return (
    <>
    <div className='tablet:hidden '>
      <FixedPhotoUA />
    </div>
    
    <div className='legal_background_container text-s bg-slate-950'>
    
       
       <div className='relative'>
        <section className='z-10 pr-4 pl-4'>
          <table className='bg-slate-950 border border-stone-300 text-white max-w-[80vh]'>
          <tr>
              <td className='border-b pb-4 p-2 text-center ' colSpan={2}>
                  <img src={logo} alt="FUEGO" className='mx-auto d-block' />
              </td>
          </tr>

              <tr>
                  <td className='border-b p-2 pb-4' colSpan={2}>
                      <h1 className='text-red-500 pb-1'>Увага! </h1>
                      <p>Вітаю, ця сторінка призначена для дорослих користувачів: </p>
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
                    <a href="/ua/home">Так</a>
                  </td>
                  <td className='p-2'>
                      <a href="ua/home"> Я вже виповнив 18 років і погоджуюсь на використання cookies </a>
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
                    <a href="https://www.google.pl/">Ні</a>
                  </td>
                  <td className='p-2'>
                      <a href="https://www.google.pl/">Мені ще не виповнилося 18 років і я хочу покинути сторінк</a>
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

export default LegalUA