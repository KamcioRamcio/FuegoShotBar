import React from 'react'
import join from '../assets/Photos/S-Join.jpg'
import { motion } from "framer-motion"
const JoinUA = () => {
  return (
    <div id="join" className='flex flex-row justify-center items-center text-center x-space-32 p-20 l-tablet:flex-col l-tablet:x-space-0 l-tablet:p-8'>
        <div>
          <img src={join}></img>
        </div>
        <div className='text-white w-5/12 items-center text-ceter text-[18px] space-y-2 pl-20 l-tablet:w-full l-tablet:pl-0 l-tablet:pt-10'>
          <p>Ми - динамічна команда, яка не боїться викликів і ставить на розвиток.</p>
          <p>Працюючи у нас, у вас є можливість отримати цінний досвід,</p>
          <p>розвивати міжособистісні навички та будувати свою кар'єру в галузі..</p>
          <p>Приєднання до команди FUEGO стане для вас незабутнім пригодою,</p>
          <p> повним нових знайомств, емоцій і викликів!</p>
          <p>Якщо ви відкриті до нових можливостей і шукаєте місце, де можете</p>
          <p> розвивати свої таланти, то запрошуємо вас подати заявку вже зараз. Приєднуйтеся до нашої команди</p>
          <p> і разом створимо неймовірні враження для наших клієнтів! </p>
          <p className='text-red-500 font-bold'>#TeamFUEGO</p>
          <motion.a 
          whileHover={{
          scale: 1,
          textShadow: "0px 0px 8px rgb(252,252,252)",
          }}
          href="mailto:biuro@fuegoshotbar.com"
          >Пишіть нам: biuro@fuegoshotbar.com </motion.a>
        </div>
    </div>
  )
}

export default JoinUA