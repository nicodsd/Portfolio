import React from 'react'
import avion from '../../public/Images/diseño-grafico/300ppi/avioncito.svg'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'

function Contact() {

  const [res, setRes] = useState(null)
  const [pending, setPending] = useState(null)

  const nombre = useRef("")
  const apellido = useRef("")
  const correo = useRef("")
  const telefono = useRef("")
  const comentarios = useRef("")

  const sendMail = (e) => {

    e.preventDefault()

    const data = {
      nombre: nombre?.current?.value,
      apellido: apellido?.current?.value,
      email: correo?.current?.value,
      telefono: telefono?.current?.value,
      comentarios: comentarios?.current?.value
    }

    axios.post(apiUrl + "enviar-correo", data)
      .then(res => {
        setRes(res)
        if(res?.data == "Correo enviado con éxito"){
          setPending(true)
        } else {
          setPending(false)
        }
      }).catch(err=>{
        console.log(err)
      })

  }

  return (
    <div id='contacto' className='relative h-screen w-full flex items-center justify-center'>
      <div className='px-6 py-14 md:p-0 lg:w-[60%] h-[90vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full flex flex-col items-center'>
          <p className='text-4xl md:text-[6rem] text-[#0600ff] font-[900] md:h-16'>Contáctame</p>
          <p className='text-sm text-center lg:text-start lg:text-lg'>Serás atendido dentro de las <b className='text-[#0600ff]'>24hs</b></p>
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full text-sm gap-y-10'>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={nombre} placeholder='Nombre' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={apellido} placeholder='Apellido' />
            </div>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={correo} placeholder='Email' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={telefono} placeholder='Teléfono' />
            </div>
            <div>
              <input ref={comentarios} className='w-full border-b-[1px] bg-transparent focus:outline-none focu h-fit text-mono border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Comentarios' />
            </div>
            <div className='flex w-full justify-center pt-12'>
              <div onClick={sendMail} className='flex cursor-pointer'>
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