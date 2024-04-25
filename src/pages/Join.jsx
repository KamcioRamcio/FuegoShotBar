import React from 'react'
import { FixedPhoto } from '../components'
import Background from '../assets/Background/Background.jpg'
import { motion } from "framer-motion"
import photo from '../assets/MainPhotos/1kieliszek.png';

const Join = () => {
  return (
    <>
    <div className='tablet:hidden'>
      <FixedPhoto />
    </div>
    <div className='legal_background_container text-lg'>
        <div>
            <img src={Background} alt="background" className='legal_background' />
        <motion.section className='z-10 pr-12 pl-12 relative'>
            <table className='bg-slate-900 border'>
                <tr>
                    <td className='text-white text-center p-4 max-w-[80vh]'>
                        Jesteśmy dynamiczną ekipą, która nie boi się wyzwań i stawia na rozwój.
                        Pracując u nas, masz szansę zdobyć cenne doświadczenie,
                        rozwijać umiejętności interpersonalne oraz budować swoją karierę w branży.
                        Niech dołączenie do zespołu FUEGO będzie dla ciebie niezapomnianą przygodą,
                        pełną nowych znajomości, emocji i wyzwań!
                        Jeśli jesteś otwarta/y na nowe możliwości i szukasz miejsca,
                        gdzie możesz rozwijać swoje talenty, to zapraszamy cię do aplikowania już teraz.
                        Dołącz do naszej ekipy i razem twórzmy niesamowite doświadczenia dla naszych klientów!
                        <p className='text-red-500 font-bold'>#TeamFUEGO</p>
                    </td>
                </tr>
                <motion.tr
                    whileHover={{
                        scale: 1,
                        textShadow: "0px 0px 8px rgb(252,252,252)",
                        boxShadow: "0px 0px 8px rgb(252,252,252)",
                        }}
                >
                    <td className='text-white text-center border-t p-2'>
                    <a href="mailto:k.nowicki24@gmail.com">Napisz do nas: k.nowicki24@gmail.com</a>
                    </td>
                </motion.tr>
            </table>
                <div className="absolute right-[-5px] bottom-[-30px] 900:hidden">
                    <img src={photo} alt="Fixed Photo" className='fixed_photo' />
                </div>
        </motion.section>
                        
        </div>
        
    </div>

    </>
  )
}

export default Join