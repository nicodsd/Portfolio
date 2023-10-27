import React from 'react'
import avion from '../../public/Images/diseño-grafico/300ppi/avioncito.svg'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'

function Contact() {

  const [res, setRes] = useState(null)
  const [pending, setPending] = useState(null)
  const [error, setError] = useState(false)
  const [campos, setCampo] = useState([])
  const [enviar, setEnviar] = useState(false)

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

    const mensajes = (campoAlerta) => {
      campos.push(campoAlerta)
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
          setRes(res)
          setCampo([])
          if (res?.data == "Correo enviado con éxito") {
            setEnviar(true)
            setPending(true)
            setError(false)
            window.location.reload()
          }
        }).catch(err => {
          console.log(err)
        })
    } if (nombre?.current?.value.length == 0) {
      setError(true)
      mensajes("Nombre")
    } if (correo?.current?.value.length == 0) {
      setError(true)
      mensajes("Correo")
    } if (telefono?.current?.value.length == 0) {
      setError(true)
      mensajes("Teléfono")
    } if (comentarios?.current?.value.length == 0) {
      setError(true)
      mensajes("Comentarios")
    }

  }

  const quitarAlerta = () => {
    setError(false)
    setCampo([])
  }

  return (
    <div id='contacto' className='relative h-screen w-full flex items-center justify-center'>
      {
        error && (
          <div className='animate__slideInRight animate__animated bg-white max-w-[35vh] lg:max-w-[29vw] flex lg:min-h-[8vw] fixed top-20 right-0 z-50'>
            <div className='text-white'>
              <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#0600ff] flex justify-center items-center rounded-l-md md:rounded-l-lg text-xl'>X</p>
            </div>
            <div className='h-full flex flex-col md:py-3 py-2 pl-2 md:pl-4'>
              <h2 className='font-semibold flex flex-wrap mb-2 md:mb-3'>Por favor rellena los campos obligatorios</h2>
              {
                campos?.length > 0 ? campos?.map((eachCampo, index) => (
                  <p key={index} className='text-xs md:text-sm font-light h-4 text-[#0600ff]'>{eachCampo}</p>
                ))
                  :
                  null
              }
            </div>
          </div>
        )
      }

      <div className='px-6 py-14 md:p-0 lg:w-[60%] h-[90vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full flex flex-col items-center'>
          <p className='text-4xl md:text-[6rem] text-[#0600ff] font-[900] md:h-16'>Contáctame</p>
          <p className='text-sm text-center lg:text-start lg:text-lg'>Serás atendido dentro de las <b className='text-[#0600ff]'>24hs</b></p>
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full text-sm gap-y-10'>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={nombre} onKeyDown={() => { console.log(nombre?.current.value) }} placeholder='Nombre *' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={apellido} onKeyDown={() => { console.log(apellido?.current.value) }} placeholder='Apellido' />
            </div>
            <div className='w-full flex gap-x-4 text-mono'>
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={correo} onKeyDown={() => { console.log(correo?.current.value) }} placeholder='Correo electrónico *' />
              <input className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]' type="text" ref={telefono} onKeyDown={() => { console.log(telefono?.current.value) }} placeholder='Teléfono *' />
            </div>
            <div>
              <input ref={comentarios} onKeyDown={() => { console.log(comentarios?.current.value) }} className='w-full border-b-[1px] bg-transparent focus:outline-none focu h-fit text-mono border-[#000000] placeholder:text-[#0600ff]' type="text" placeholder='Comentarios *' />
            </div>
            <div className='flex w-full justify-center pt-12'>
              <div onClick={sendMail} className='flex cursor-pointer'>
                <input className='bg-[#0600ff] w-24 cursor-pointer text-sm p-3 text-white text-mono' type="submit" value="Enviar" />

                {enviar == true ? (
                  <div className='w-[2.7rem] flex items-center border-2 border-[#0600ff] rounded-ee-lg justify-center'>
                    <img className='h-6 animate__animated animate__zoomOut' src={avion} alt="avion-enviar" />
                  </div>
                ) : (
                  <div className='w-[2.7rem] flex items-center border-2 border-[#0600ff] rounded-ee-lg justify-center'>
                    <img className='h-6 ' src={avion} alt="avion-enviar" />
                  </div>
                )}

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact