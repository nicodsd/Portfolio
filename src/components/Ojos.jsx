import React from 'react'
import ojo from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'

function Ojos() {
  return (
    <div className='h-[60vh] w-full flex justify-center items-center'>
        <div className='flex relative flex-col w-fit gap-3'>
          <p className='absolute z-10 text-white text-lg w-[50%] p-10 text-mono'>¿Quieres una cotización para tu sitio web?</p>
            <img className='h-[18vh] w-fit drop-shadow-lg' src={ojo} alt="ojos" />
            <div className='w-full flex justify-end pr-10'>
                <p className=' bg-black px-2 text-mono rounded-xl text-white cursor-pointer'>Mas info</p>
            </div>
        </div>
    </div>
  )
}

export default Ojos