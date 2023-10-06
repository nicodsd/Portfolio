import React from 'react'
import ojo from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'

function Ojos() {
  return (
    <div className='mt-52 w-full flex justify-center items-center'>
        <div className='flex relative items-center w-fit '>
          <p className='absolute z-10 text-white ml-8 text-[1.5vw] w-[38%] text-mono'>¿Quieres una cotización para tu sitio web?</p>
            <img className='h-[18vh] w-fit drop-shadow-lg' src={ojo} alt="ojos" />
        </div>
    </div>
  )
}

export default Ojos