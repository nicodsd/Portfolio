import React from 'react'
import avion from '../../public/Images/diseño-grafico/300ppi/avioncito.svg'

function Contact() {
  return (
    <div id='contacto' className='relative h-screen w-full flex items-center justify-center'>
      <div className='px-6 py-14 md:p-0 lg:w-[60%] h-[90vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full flex flex-col items-center'>
          <p className='text-4xl md:text-[6rem] text-[#0600ff] font-[900] md:h-16'>Contáctame</p>
          <p className='text-sm text-center lg:text-start lg:text-lg'>Serás atendido dentro de las <b className='text-[#0600ff]'>24hs</b></p>
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full text-sm gap-y-10' action="/post">
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Nombre' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Apellido' />
            </div>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Email' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Teléfono' />
            </div>
            <div>
              <input className='w-full border-b-[1px] bg-transparent focus:outline-none focu h-fit text-mono border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Comentarios' />
            </div>
            <div className='flex w-full justify-center pt-12'>
              <div className='flex cursor-pointer'>
                <input className='bg-[#0600ff] w-24 cursor-pointer text-sm p-3 text-white text-mono' type="submit" value="Enviar" />
                <div className='w-[2.7rem] flex items-center border-2 border-[#0600ff] rounded-ee-lg justify-center'>
                  <img className='h-6' src={avion} alt="avion-enviar" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact