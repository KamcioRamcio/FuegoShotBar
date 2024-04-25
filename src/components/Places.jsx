import React from 'react'
import LeftMap from '../assets/Photos/1-New4.png'
import Map from '../assets/MainPhotos/Mapa.png'

const Places = () => {
  return (
    <>
    <div id="places" className='text-white flex flex-row justify-center space-x-10 pt-20 items-center pr-4 pl-4 h-[700px] l-tablet:flex-col l-tablet:h-full l-tablet:space-x-0'>
        <div className='h-full'>
            <img src={LeftMap} className='h-full object-contain l-tablet:hidden'></img>
        </div>
        <div className='h-full'>
            <img src={Map} className='h-full w-full object-contain l-tablet:p-2'></img>
        </div>
    </div>
    <div className='text-white flex flex-col items-center pt-10' id="local" >
      <p>Lokalizacje</p>
      <p><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x4716cf9c7ad47b69:0x762d28cefe92163b?sa=X&ved=1t:8290&ictx=111" target="_blank">Katowice, Mariacka 2</a></p>
      <p><a href="https://www.google.com/maps/place/Stanis%C5%82awa+Ma%C5%82achowskiego+30,+41-200+Sosnowiec/@50.2764087,19.129491,17z/data=!3m1!4b1!4m6!3m5!1s0x4716dabb79da6199:0x9be4088b0a56e9b7!8m2!3d50.2764053!4d19.1320659!16s%2Fg%2F11c5c8hrq2?entry=ttu" target="_blank">Sosnowiec, Stanisława Małachowskiego 30</a></p>
      <p><a href="https://www.google.com/maps/place/STREFA+przy+pla%C5%BCy/@54.0251734,14.7451574,17z/data=!3m1!4b1!4m6!3m5!1s0x47aa85292e10ca3f:0x1b6a0a44e993ed64!8m2!3d54.0251703!4d14.7477323!16s%2Fg%2F11kqbwdqkx?entry=ttu" target="_blank">Dziwnów, Kochanowskiego 4</a></p>
    </div>
    </>
  )
}

export default Places