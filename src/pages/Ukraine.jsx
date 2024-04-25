import React from 'react'
import {FixedShotUA, FixedPhotoUA, NavbarUA, FilmUA, AboutUA, PlacesUA, GalleryUA, FooterUA, ContactUA, FranchisingUA, JoinUA } from '../components-ua'

const Ukraine = () => {
  return (
    <>
    <div className='bg-slate-950 h-full'>
    <nav>
      <NavbarUA />
    </nav>
      <div>
        <FixedPhotoUA />
        <FixedShotUA />
      </div>
      <div >
        <FilmUA />
        <AboutUA />
        <PlacesUA />
        <GalleryUA />
        <ContactUA />
        <JoinUA/>
        <FranchisingUA /> 
        <FooterUA />
      </div>
      </div>
    </>
  )
}

export default Ukraine