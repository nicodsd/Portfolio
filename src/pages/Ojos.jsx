import React from 'react'
import ojo from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
import ojos from '../../public/Images/contenido/SVG/Recurso82.svg'

function Ojos() {
  return (
    <div className='md:h-[25vw] w-full flex justify-center items-end '>
      <div className='flex relative items-center justify-evenly w-[84%] duration-150 text-white bg-black h-36 rounded-full'>
        <p className='md:text-center text-xs md:text-[1.8vw] font-semibold text-mono'>¿Quieres una cotización para tu próxima app?</p>
        <div className='flex w-fit h-full items-end'>
        <img className='h-8 md:h-[10vh] w-fit' src={ojos} alt="ojos" />
        </div>
      </div>
    </div>
  )
}

export default Ojos