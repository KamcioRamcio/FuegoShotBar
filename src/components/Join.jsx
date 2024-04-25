import React from 'react'
import join from '../assets/Photos/S-Join.jpg'
import { motion } from "framer-motion"
const Join = () => {
  return (
    <div id="join" className='flex flex-row justify-center items-center text-center x-space-32 p-20 l-tablet:flex-col l-tablet:x-space-0'>
        <div>
          <img src={join}></img>
        </div>
        <div className='text-white w-5/12 items-center text-ceter text-[18px] space-y-2 pl-20 l-tablet:w-full l-tablet:pl-0 l-tablet:pt-10'>
          <p>Jesteśmy dynamiczną ekipą, która nie boi się wyzwań i stawia na rozwój.</p>
          <p>Pracując u nas, masz szansę zdobyć cenne doświadczenie,</p>
          <p>rozwijać umiejętności interpersonalne oraz budować swoją karierę w branży.</p>
          <p>Niech dołączenie do zespołu FUEGO będzie dla ciebie niezapomnianą przygodą,</p>
          <p>pełną nowych znajomości, emocji i wyzwań!</p>
          <p>Jeśli jesteś otwarta/y na nowe możliwości i szukasz miejsca,</p>
          <p>gdzie możesz rozwijać swoje talenty, to zapraszamy cię do aplikowania już teraz.</p>
          <p>Dołącz do naszej ekipy i razem twórzmy niesamowite doświadczenia dla naszych klientów!</p>
          <p className='text-red-500 font-bold'>#TeamFUEGO</p>
          <motion.a 
          whileHover={{
          scale: 1,
          textShadow: "0px 0px 8px rgb(252,252,252)",
          }}
          href="mailto:biuro@fuegoshotbar.com"
          >Napisz do nas: biuro@fuegoshotbar.com</motion.a>
        </div>
    </div>
  )
}

export default Join