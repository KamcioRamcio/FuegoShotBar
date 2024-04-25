import React from 'react'
import { FixedPhoto } from '../components'
import Background from '../assets/Background/Background.jpg'
import { motion } from "framer-motion"
import photo from '../assets/MainPhotos/1kieliszek.png';


const Franchise = () => {
  return (
    <>
    <div className='tablet:hidden'>
      <FixedPhoto />
    </div>
    <div className='legal_background_container text-[16px]'>
        <div>
            <img src={Background} alt="background" className='legal_background' />
        <motion.section className='z-10 pr-12 pl-12 relative'>
            <table className='bg-slate-900 border'>
                <tr>
                    <td className='text-white text-center p-2 max-w-[80vh]'>
                    Jesteś gotowy na start własnego biznesu? 
                    Pragniesz poczuć dreszczyk emocji i spełnić swoje marzenia o niezależności finansowej? Jeśli tak, to franczyza shot baru Fuego jest idealną propozycją dla Ciebie!
                    Wyobraź sobie, że każdego dnia będziesz serwować klientom najwyższej jakości shot'y, tworzyć niepowtarzalną atmosferę i cieszyć się z uśmiechów zadowolonych gości. To nie tylko praca, to pasja i spełnienie marzeń!
                    Ale to nie wszystko! Franczyza shot baru Fuego to również świetna inwestycja finansowa. Dzięki sprawdzonej koncepcji biznesowej oraz wsparciu ze strony centrali, szybko odzyskasz zainwestowane środki i zaczniesz generować zyski.
                    Analiza rynku pokazuje, że branża gastronomiczna cieszy się dużym zainteresowaniem, zwłaszcza wśród młodych ludzi, którzy szukają miejsc do spędzania czasu w niebanalny sposób. Fuego doskonale wpisuje się w te oczekiwania, oferując unikalne doznania.
                    Nie czekaj dłużej – weź udział w sukcesie marki Fuego i otwórz swój własny shot bar już teraz! Zapisz się na rozmowę informacyjną i rozpocznij swoją przygodę z franczyzą. Emocje czekają na Ciebie!
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

export default Franchise