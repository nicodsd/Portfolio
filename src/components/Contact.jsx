import React from 'react'
import avion from '../../public/Images/diseño-grafico/300ppi/avioncito.svg'
import lineas from '../../public/Images/diseño-grafico/300ppi/Lineas.svg'

function Contact() {
  return (
    <div className='relative h-screen w-full flex items-center justify-center bg-white'>
      <div className='w-[60%] h-[90vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full flex flex-col items-center'>
          <p className='contact-com text-[#0600ff] font-[900] h-28'>Contáctame</p>
          <p>Serás atendido en menos de <b className='text-[#0600ff]'>48hs</b></p>
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full text-sm gap-y-14' action="/post">
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Nombre' />
              <input className='w-[49%] border-b-[1px] border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Apellido' />
            </div>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Email' />
              <input className='w-[49%] border-b-[1px] border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Teléfono' />
            </div>
            <div>
              <input className='w-full border-b-[1px] h-fit text-mono border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Comentarios' />
            </div>
            <div className='flex w-full justify-center pt-12'>
              <div className='flex cursor-pointer'>
                <input className='bg-[#0600ff] w-24 cursor-pointer text-sm p-3 rounded-lg text-white text-mono' type="submit" value="Enviar" />
                <div className='border bg-[#D7DDFF] w-[2.7rem] rounded-lg flex items-center justify-center'>
                  <img className='h-7' src={avion} alt="avion-enviar" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    <img className='absolute left-0 bottom-0 z-50 h-[38vh]' src={lineas} alt="" />
    </div>
  )
}

export default Contact