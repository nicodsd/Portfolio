import React from 'react'
import ojos from '../../public/Images/diseño-grafico/objetos-graficos/Recurso82.svg'

function Ojos() {
  return (
    <div className='mt-20 md:my-1 md:mt-16 selection:bg-transparent md:mt-0 bg-white md:h-[25vw] max-w-full flex justify-center items-center rounded-full mx-6'>
      <div className='flex flex-col md:flex-row relative items-center justify-evenly md:w-[80%] duration-150 md:text-white md:bg-black h-28 pt-2 px-2 lg:h-40 rounded-t- md:rounded-full '>
        <p className='text-center w-[60%] md:text-md lg:text-xl font-semibold text-mono'>Estamos de inauguración, en tu primer App un descuento del 30%.</p>
        <div className='flex w-[60vw] md:w-fit h-full mt-1 md:mt-0 bg-black md:bg-transparent rounded-t-full justify-center items-end'>
          <img className='h-10 md:h-[8vw] w-fit' src={ojos} alt="ojos" />
        </div>
      </div>
    </div>
  )
}

export default Ojos