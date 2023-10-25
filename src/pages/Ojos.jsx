import React from 'react'
import ojo from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
import ojos from '../../public/Images/contenido/SVG/Recurso82.svg'

function Ojos() {
  return (
    <div className='mt-20 md:my-10 md:mt-0 md:h-[25vw] w-full flex justify-center items-end '>
      <div className='flex flex-col md:flex-row relative items-center justify-evenly md:w-[90%] duration-150 md:text-white md:bg-black h-28 pt-2 px-2 lg:h-36 rounded-t- md:rounded-full'>
        <p className='text-center w-[60%] md:text-md font-semibold text-mono'>CHISS! toca aquí para obtener un codigo de descuento.</p>
        <div className='flex w-[60vw] md:w-fit h-full mt-1 md:mt-0 bg-black md:bg-transparent rounded-t-full justify-center items-end'>
          <img className='h-10 md:h-[8vw] w-fit' src={ojos} alt="ojos" />
        </div>
      </div>
    </div>
  )
}

export default Ojos