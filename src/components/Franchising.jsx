import React from 'react'
import left from '../assets/Photos/S-Lokal16.jpg'
import {motion} from 'framer-motion'
 
const Franchising = () => {
  return (
    <div className='flex flex-row space-x-24 items-center justify-center text-center p-8 l-tablet:flex-col l-tablet:space-x-0 l-tablet:p-8' id='franchise'>
        <div className='large:hidden'>
            <img src={left}></img>
        </div>
        <div className='text-white w-8/12 items-center text-ceter text-[18px]  l-tablet:w-full l-tablet:pt-10 '>
            <p className='text-red-500 font-bold text-xl'>FRANCHISE</p>
            <p>Jesteś gotowy na start własnego biznesu? </p>
            <p>Pragniesz poczuć dreszczyk emocji i spełnić swoje marzenia o niezależności finansowej? </p>
            <p>Jeśli tak, to franczyza shot baru Fuego jest idealną propozycją dla Ciebie!</p>
            <p> Wyobraź sobie, że każdego dnia będziesz serwować klientom najwyższej jakości shot'y, </p>
            <p>tworzyć niepowtarzalną atmosferę i cieszyć się z uśmiechów zadowolonych gości. </p>
            <p>To nie tylko praca, to pasja i spełnienie marzeń!</p>
            <p>Ale to nie wszystko! Franczyza shot baru Fuego to również świetna inwestycja finansowa. </p>
            <p>Dzięki sprawdzonej koncepcji biznesowej oraz wsparciu ze strony centrali, </p>
            <p>szybko odzyskasz zainwestowane środki i zaczniesz generować zyski.</p>
            <p>Analiza rynku pokazuje, że branża gastronomiczna cieszy się dużym zainteresowaniem, </p>
            <p>zwłaszcza wśród młodych ludzi, którzy szukają miejsc do spędzania czasu w niebanalny sposób. </p>
            <p>Fuego doskonale wpisuje się w te oczekiwania, oferując unikalne doznania.</p>
            <p>Nie czekaj dłużej – weź udział w sukcesie marki Fuego i otwórz swój własny shot bar już teraz! </p>
            <p>Zapisz się na rozmowę informacyjną i rozpocznij swoją przygodę z franczyzą. Emocje czekają na Ciebie!</p>
            <p className='text-red-500 font-bold'>#TeamFUEGO</p>
            <motion.a 
            whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(252,252,252)",
                        }}
            href="mailto:biuro@fuegoshotbar.com"
            
            >Napisz do nas: biuro@fuegoshotbar.com</motion.a>
            
            
        </div>
        <div className='l-tablet:hidden'>
            <img src={left}></img>
        </div>
    </div>
  )
}

export default Franchising