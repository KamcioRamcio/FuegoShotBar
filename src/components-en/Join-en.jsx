import React from 'react'
import join from '../assets/Photos/S-Join.jpg'
import { motion } from "framer-motion"
const JoinEN = () => {
  return (
    <div id="join" className='flex flex-row justify-center items-center text-center x-space-32 p-20 l-tablet:flex-col l-tablet:x-space-0 l-tablet:p-8'>
        <div>
          <img src={join}></img>
        </div>
        <div className='text-white w-7/12 items-center text-ceter text-[18px] space-y-2 pl-20 l-tablet:w-full l-tablet:pl-0 l-tablet:pt-10'>
          <p className='text-red-500 font-bold text-xl'>TEAM FUEGO</p>
          <p>We are a dynamic team that is not afraid of challenges and focuses on development.</p>
          <p>By working with us, you have the opportunity to gain valuable experience,</p>
          <p>develop interpersonal skills, and build your career in the industry.</p>
          <p> Joining the FUEGO team should be an unforgettable adventure for you</p>
          <p> full of new acquaintances, emotions, and challenges!</p>
          <p> If you are open to new opportunities and looking for a place</p>
          <p>where you can develop your talents, we invite you to apply now.</p>
          <p>Join our team and together let's create amazing experiences for our clients! </p>
          <p className='text-red-500 font-bold'>#TeamFUEGO</p>
          <motion.a 
          whileHover={{
          scale: 1,
          textShadow: "0px 0px 8px rgb(252,252,252)",
          }}
          href="mailto:biuro@fuegoshotbar.com"
          >Contact us at: biuro@fuegoshotbar.com</motion.a>
        </div>
    </div>
  )
}

export default JoinEN