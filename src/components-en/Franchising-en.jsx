import React from 'react'
import left from '../assets/Photos/S-Lokal16.jpg'
import {motion} from 'framer-motion'
 
const FranchisingEN = () => {
  return (
    <div className='flex flex-row space-x-12 items-center justify-center text-center p-20 l-tablet:flex-col l-tablet:space-x-0 l-tablet:p-8' id='franchise'>
        <div className='large:hidden'>
            <img src={left}></img>
        </div>
        <div className='text-white w-7/12 items-center text-ceter text-[18px]  l-tablet:w-full l-tablet:pt-10'>
            <p className='text-red-500 font-bold text-xl'>FRANCHISE</p>
            <p>Are you ready to start your own business?  </p>
            <p>Do you want to feel the thrill of excitement and fulfill your dreams of financial independence? </p>
            <p>If so, then the franchise of Fuego shot bar is the perfect proposition for you!</p>
            <p> Imagine serving customers high-quality shots every day,</p>
            <p>creating a unique atmosphere, and enjoying the smiles of satisfied guests.</p>
            <p>It's not just a job, it's a passion and the fulfillment of dreams</p>
            <p>But that's not all! The Fuego shot bar franchise is also a great financial investment.</p>
            <p>Thanks to a proven business concept and support from the headquarters, </p>
            <p>you will quickly recoup your investment and start generating profits.</p>
            <p> Market analysis shows that the gastronomy industry is highly popular, </p>
            <p>especially among young people looking for unconventional places to spend their time. </p>
            <p>Fuego perfectly meets these expectations, offering unique experiences.</p>
            <p> Don't wait any longer - join the success of the Fuego brand and open your own shot bar now!</p>
            <p>Sign up for an informational interview and start your franchise adventure. Excitement awaits you! </p>
            <p className='text-red-500 font-bold'>#TeamFUEGO</p>
            <motion.a 
            whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(252,252,252)",
                        }}
            href="mailto:biuro@fuegoshotbar.com"
            
            >Contact us at: biuro@fuegoshotbar.com</motion.a>
            
            
        </div>
        <div className='l-tablet:hidden'>
            <img src={left}></img>
        </div>
    </div>
  )
}

export default FranchisingEN