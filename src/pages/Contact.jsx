import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'

function Contact() {

  const nombre = useRef("")
  const apellido = useRef("")
  const correo = useRef("")
  const telefono = useRef("")
  const comentarios = useRef("")

  const [res, setRes] = useState(null)
  const [enviado, setEnviado] = useState(false)

  const sendMail = (e) => {

    e.preventDefault()

    const data = {
      nombre: nombre?.current?.value,
      apellido: apellido?.current?.value,
      email: correo?.current?.value,
      telefono: telefono?.current?.value,
      comentarios: comentarios?.current?.value
    }

    if (nombre?.current?.value.length > 0
      &&
      correo?.current?.value.length > 0
      &&
      telefono?.current?.value.length > 0
      &&
      comentarios?.current?.value.length > 0
    ) {
      axios.post(apiUrl + "enviar-correo", data)
        .then(res => {
          if (res?.data == "Correo enviado con éxito") {
            setRes("Mensaje enviado!")
            setEnviado(true)
            quitarAlertaTemp()
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }

  const quitarAlerta = () => {
    setEnviado(false)
  }

  const quitarAlertaTemp = () => {
    const tiempoDeEspera = 4000;
    const timer = setTimeout(() => {
      quitarAlerta()
    }, tiempoDeEspera)
  }

  return (
    <div className='relative mt-14'>
      {enviado &&
        <div className='selection:bg-transparent w-fit drop-shadow-md flex bg-white -translate-y-16 md:-translate-y-20 rounded-md md:rounded-lg fixed h-fit modal-enviado z-10'>
          <div className='text-white'>
            <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#0600ff] hover:opacity-80 cursor-pointer flex justify-center items-center rounded-l-md md:rounded-l-lg text-xl'>X</p>
          </div>
          <div className='flex flex-col bg-white cursor-default p-4 md:p-6 rounded-md md:rounded-lg'>
            <h2 className='font-semibold flex flex-wrap'>{res}</h2>
          </div>
        </div>
      }

      <div id='contacto' className='z-20 relative min-h-[20vw] max-w-full flex items-center justify-center rounded-t-[13vh] md:rounded-t-[20vh] rounded-b-xl bg-white lg:mx-10'>
        <div className='px-6 md:p-0 lg:w-[60%] h-[80vh] flex flex-col justify-evenly'>
          <div className='text-mono w-full flex flex-col items-center selection:bg-transparent'>
            <p className='text-[5vh] md:text-[6rem] text-[#0600ff] font-[900] lg:h-[18vh]'>Contáctame</p>
            <p className='text-sm text-center lg:text-start lg:text-lg'>Serás atendido dentro de las <b className='text-[#0600ff]'>24hs</b></p>
          </div>
          <div className='flex justify-center w-full'>
            <form onSubmit={sendMail} className='flex flex-col w-full text-sm gap-y-10'>
              <div className='w-full flex gap-x-4 text-mono'>
                <input
                  className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                  type="text"
                  ref={nombre}
                  required
                  autoComplete='off'
                  placeholder='Nombre *' />
                <input
                  className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                  type="text"
                  ref={apellido}
                  autoComplete='off'
                  placeholder='Apellido' />
              </div>
              <div className='w-full flex gap-x-4 text-mono'>
                <input
                  className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                  type="email"
                  ref={correo}
                  required
                  autoComplete='off'
                  placeholder='Correo *' />
                <input
                  className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff] appearance-none'
                  id='input-num'
                  type="tel"
                  inputMode="numeric"
                  required
                  autoComplete='off'
                  ref={telefono}
                  placeholder='Teléfono *' />
              </div>
              <div>
                <input
                  ref={comentarios}
                  className='w-full border-b-[1px] bg-transparent focus:outline-none h-fit text-mono border-[#000000] placeholder:text-[#0600ff]'
                  type="text"
                  required
                  autoComplete='off'
                  placeholder='Comentarios *' />
              </div>
              <div className='flex w-full justify-center pt-12'>

                <input
                  className='bg-[#0600ff] rounded-md w-24 cursor-pointer text-sm p-3 text-white text-mono'
                  type="submit"
                  value="Enviar"
                />

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact