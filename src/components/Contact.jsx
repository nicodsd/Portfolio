import React from 'react'
import avion from '../../public/Images/diseño-grafico/300ppi/avioncito.svg'

function Contact() {
  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-[#FFD400]'>
      <div className='w-[60%] h-[70vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full font-[900] flex'>
          <div>
            <p className='contact-com h-11'>Contacta</p>
            <p className='contact-com'>conmigo</p>
          </div>
          <img className='h-24' src={avion} alt="" />
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full gap-1 row shadow-[0_4px_0px_rgba(0,0,0,1)] ' action="/post">
            <div className='w-full flex gap-x-4'>
              <input className='w-[49%] placeholder:pl-2 p-1' type="text" placeholder='Nombre' />
              <input className='w-[49%] placeholder:pl-2 p-1' type="text" placeholder='Barrera' />
            </div>
            <input className='h-44 placeholder:pl-2 p-1' type="text" placeholder='Comentarios' />
            <input className='bg-[#0600ff] text-white text-mono' type="submit" value="Submit" />
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact