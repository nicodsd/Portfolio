import React from 'react'
import avion from '../../public/Images/diseño-grafico/iconos/avioncito.svg'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { Suspense } from 'react'

function Contact() {

  const [res, setRes] = useState(null)
  const [pending, setPending] = useState(null)
  const [error, setError] = useState(false)
  const [campos, setCampo] = useState([])
  const [enviar, setEnviar] = useState(false)
  const [formulario, setFormulario] = useState({
    nombre: '',
    comentarios: '',
    correo: '',
    telefono: ''
  });

  const nombre = useRef("")
  const apellido = useRef("")
  const correo = useRef("")
  const telefono = useRef("")
  const comentarios = useRef("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  const areCamposObligatoriosCompletos = () => {
    const camposObligatorios = ['nombre', 'comentarios', 'correo', 'telefono'];
    return camposObligatorios.every((campo) => formulario[campo].trim() !== '');
  };

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
      quitarAlertaTemp()
      mensajes("Nombre")
    } if (correo?.current?.value.length == 0) {
      setError(true)
      quitarAlertaTemp()
      mensajes("Correo")
    } if (telefono?.current?.value.length == 0) {
      setError(true)
      quitarAlertaTemp()
      mensajes("Teléfono")
    } if (comentarios?.current?.value.length == 0) {
      setError(true)
      quitarAlertaTemp()
      mensajes("Comentarios")
    }
  }

  const quitarAlerta = () => {
    setError(false)
    setCampo([])
  }

  const quitarAlertaTemp = () => {
    const tiempoDeEspera = 3000;
    const timer = setTimeout(() => {
      quitarAlerta()
    }, tiempoDeEspera)
  }

  return (
    <div id='contacto' className='relative min-h-[20vw] max-w-full flex items-center justify-center rounded-t-[20vh] rounded-b-xl bg-white mx-6'>
      {
        error && (
          <div className='animate__slideInRight animate__animated selection:bg-transparent max-w-[35vh] drop-shadow-md lg:max-w-[29vw] flex lg:min-h-[8vw] bg-white rounded-l-md md:rounded-l-lg fixed top-20 right-0 z-50'>
            <div className='text-white'>
              <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#FF0080] hover:bg-[#ff51a8] cursor-pointer flex justify-center items-center rounded-l-md md:rounded-l-lg text-xl'>X</p>
            </div>
            <div className='h-full flex flex-col md:py-3 py-2 pl-2 md:pl-4 bg-white cursor-default'>
              <h2 className='font-semibold flex flex-wrap mb-2 md:mb-3'>Por favor llena los campos obligatorios:</h2>
              {
                campos?.length > 0 ? campos?.map((eachCampo, index) => (
                  <p key={index} className='text-xs md:text-sm font-light h-4 text-[#FF0080]'>{eachCampo}</p>
                ))
                  :
                  null
              }
            </div>
          </div>
        )
      }

      <div className='px-6 py-14 md:p-0 lg:w-[60%] h-[70vh] flex flex-col justify-evenly'>
        <div className='text-mono w-full flex flex-col items-center selection:bg-transparent'>
          <p className='text-4xl md:text-[6rem] text-[#0600ff] font-[900] md:h-16'>Contáctame</p>
          <p className='text-sm text-center lg:text-start lg:text-lg'>Serás atendido dentro de las <b className='text-[#0600ff]'>24hs</b></p>
        </div>
        <div className='flex justify-center w-full'>
          <form className='flex flex-col w-full text-sm gap-y-10'>
            <div className='w-full flex gap-x-4 text-mono'>
              <input
                className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                type="text"
                ref={nombre}
                required
                onChange={handleChange}
                value={formulario.nombre}
                placeholder='Nombre *' />
              <input
                className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                type="text"
                ref={apellido}
                placeholder='Apellido' />
            </div>
            <div className='w-full flex gap-x-4 text-mono'>
              <input
                className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                type="email"
                ref={correo}
                required
                value={formulario.correo}
                onChange={handleChange}
                placeholder='Correo *' />
              <input
                className='w-[49%] border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff] appearance-none'
                id='input-num'
                type="number"
                inputmode="numeric"
                required
                value={formulario.telefono}
                ref={telefono}
                onChange={handleChange}
                placeholder='Teléfono *' />
            </div>
            <div>
              <input
                ref={comentarios}
                className='w-full border-b-[1px] bg-transparent focus:outline-none h-fit text-mono border-[#000000] placeholder:text-[#0600ff]'
                type="text"
                required
                value={formulario.comentarios}
                onChange={handleChange}
                placeholder='Comentarios *' />
            </div>
            <div className='flex w-full justify-center pt-12'>

              <div className='flex cursor-pointer z-50'>
                <button onClick={sendMail} disabled={!areCamposObligatoriosCompletos()} className='bg-[#0600ff] rounded-md boton-enviar w-24 cursor-pointer text-sm p-3 text-white text-mono'
                  type="submit"
                  value="Enviar">
                  Enviar
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact