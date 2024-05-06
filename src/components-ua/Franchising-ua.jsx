import React from 'react'
import left from '../assets/Photos/S-Lokal16.jpg'
import {motion} from 'framer-motion'
 
const FranchisingUA = () => {
  return (
    <div className='flex flex-row space-x-12 items-center justify-center text-center p-20 l-tablet:flex-col l-tablet:space-x-0 l-tablet:p-8' id='franchise'>
        <div className='large:hidden'>
            <img src={left}></img>
        </div>
        <div className='text-white w-7/12 items-center text-ceter text-[18px]  l-tablet:w-full l-tablet:pt-10'>
            
            <p>Готові запустити свій бізнес?</p>
            <p>Бажаєте відчути хвилю емоцій та здійснити свої мрії про фінансову незалежність?</p>
            <p> Якщо так, то франшиза шот-бару Fuego - це ідеальна пропозиція для вас!</p>
            <p>явіть собі, що кожен день ви будете подавати клієнтам шоти найвищої якості,</p>
            <p> створювати неповторну атмосферу та насолоджуватися посмішками задоволених гостей</p>
            <p>. Це не лише робота, а й страсті та втілення мрій! Але це ще не все! </p>
            <p>Франшиза шот-бару Fuego - також чудова фінансова інвестиція.</p>
            <p>Завдяки перевіреній бізнес-концепції та підтримці зі сторони центрального офісу,
            <p></p>ви швидко повернете вкладені кошти та почнете отримувати прибуток</p>
            <p> Аналіз ринку показує, що гастрономічна галузь користується великим попитом,</p>
            <p>особливо серед молодих людей, які шукають місця для проведення часу у незвичний спосіб</p>
            <p>Fuego відмінно вписується в ці очікування, пропонуючи унікальні враження.</p>
            <p> Не чекайте довше - приєднуйтесь до успіху бренду Fuego та відкрийте свій власний шот-бар вже зараз! </p>
            <p>Запишіться на інформаційну розмову та розпочніть свою подорож до франшизи. Емоції чекають на вас! </p>
            <p className='text-red-500 font-bold'>#TeamFUEGO</p>
            <motion.a 
            whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(252,252,252)",
                        }}
            href="mailto:biuro@fuegoshotbar.com"
            
            >Пишіть нам: biuro@fuegoshotbar.com </motion.a>
            
            
        </div>
        <div className='l-tablet:hidden'>
            <img src={left}></img>
        </div>
    </div>
  )
}

export default FranchisingUA