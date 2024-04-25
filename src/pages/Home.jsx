import React from 'react'
import {FixedShot, FixedPhoto, Navbar, Film, About, Places, Gallery, Footer, Contact } from '../components'

const Home = () => {
  return (
    <>
    <div className='bg-slate-950 h-full'>
    <nav>
      <Navbar />
    </nav>
      <div>
        <FixedPhoto />
        <FixedShot />
      </div>
      <div >
        <Film />
        <About />
        <Places />
        <Gallery />
        <Contact />
        <Footer />
      </div>
      </div>
    </>
  )
}

export default Home