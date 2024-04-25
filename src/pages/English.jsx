import React from 'react'
import {FixedShotEN, FixedPhotoEN, NavbarEN, FilmEN, AboutEN, PlacesEN, GalleryEN, FooterEN, ContactEN, FranchisingEN, JoinEN } from '../components-en'

const English = () => {
  return (
    <>
    <div className='bg-slate-950 h-full'>
    <nav>
      <NavbarEN />
    </nav>
      <div>
        <FixedPhotoEN />
        <FixedShotEN />
      </div>
      <div >
        <FilmEN />
        <AboutEN />
        <PlacesEN />
        <GalleryEN />
        <ContactEN />
        <JoinEN/>
        <FranchisingEN /> 
        <FooterEN />
      </div>
      </div>
    </>
  )
}

export default English