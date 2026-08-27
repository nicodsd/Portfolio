import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from 'motion/react'
import { FaGithub, FaBehance, FaLinkedin } from 'react-icons/fa'

// Variantes para la alerta flotante
const alertVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
}

function Contact() {
  const nombre = useRef("")
  const correo = useRef("")
  const comentarios = useRef("")

  const [res, setRes] = useState(null)
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)

  const sendMail = (e) => {
    e.preventDefault()

    if (
      nombre?.current?.value.length > 0 &&
      correo?.current?.value.length > 0 &&
      comentarios?.current?.value.length > 0
    ) {
      setCargando(true)
      emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: nombre.current.value,
          email: correo.current.value,
          message: comentarios.current.value,
        },
        import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          setCargando(false)
          setRes("Mensaje enviado!")
          setEnviado(true)
          quitarAlertaTemp()
          nombre.current.value = ""
          correo.current.value = ""
          comentarios.current.value = ""
        }).catch(err => {
          console.error(err)
          setCargando(false)
          setRes("Error al enviar el mensaje")
          setEnviado(true)
          quitarAlertaTemp()
        })
    }
  }

  const quitarAlerta = () => setEnviado(false)

  const quitarAlertaTemp = () => {
    setTimeout(() => quitarAlerta(), 4000)
  }

  return (
    <div className='relative'>
      {/* AnimatePresence permite animar la salida cuando enviado pasa a false */}
      <AnimatePresence>
        {enviado && (
          <motion.div
            variants={alertVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='selection:bg-transparent w-fit drop-shadow-md flex bg-white -translate-y-16 md:-translate-y-20 rounded-md md:rounded-lg fixed h-fit modal-enviado z-50'
          >
            <div className='flex flex-col bg-white cursor-default p-4 md:p-6 rounded-l-md md:rounded-l-lg'>
              <h2 className='font-semibold flex flex-wrap'>{res}</h2>
            </div>
            <div className='text-white'>
              <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#0600ff] hover:opacity-80 cursor-pointer flex justify-center items-center rounded-r-md md:rounded-r-lg text-xl'>X</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id='contacto' className='z-20 overflow-hidden seccion-contact px-4 w-full md:pb-0 pt-20 md:pt-30 pb-30 relative max-w-full flex items-center justify-center'>
        <div className='w-full flex md:w-[60%] h-[60vw] md:h-[30vw] py-20 min-h-62.5 flex-col items-center md:flex-row justify-center'>
          {/*  <div className='text-mono flex flex-col md:w-[40%] h-[60vw] md:h-[25vw] min-h-62.5 relative gap-y-4 md:items-start w-full items-center py-10 md:justify-center selection:bg-transparent'>
            <img
              src="/Images/diseño-grafico/objetos-graficos/contact.svg" alt=""
              width={1000}
              height={1000}
              className="w-20 md:w-[20vw] h-20 md:h-[20vw]"
            />
          </div> */}
          <div className='flex flex-col title-contact w-full md:w-[60%] h-full gap-y-16 items-start justify-center'>
            <div className='flex flex-col gap-y-4 selection:bg-transparent'>

              {/* Contenedor del título */}
              <h2
                className="md:text-7xl text-5xl text-[#0600ff] font-black tracking-tight flex flex-wrap"
              >
                Hablemos
              </h2>

              <p className='text-lg lg:text-start lg:text-lg'>
                {" "}Te responderé a la brevedad.
              </p>
            </div>

            <form onSubmit={sendMail} className='flex justify-center h-full w-full flex-col text-[13px] md:text-sm gap-y-10'>
              <div className='w-full flex gap-x-4 text-mono'>
                <input
                  className='w-full input-contact border-b bg-transparent focus:outline-none border-[#000000] placeholder:text-gray-300'
                  type="text"
                  ref={nombre}
                  required
                  autoComplete='off'
                  placeholder='Juan Perez *' />
                <input
                  className='w-full input-contact border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-gray-300'
                  type="email"
                  ref={correo}
                  required
                  autoComplete='off'
                  placeholder='mi@gmail.com *' />
              </div>
              <input
                ref={comentarios}
                className='w-full input-contact border-b-[1px] bg-transparent focus:outline-none h-fit text-mono border-[#000000] placeholder:text-gray-300'
                type="text"
                required
                autoComplete='off'
                placeholder='Quiero una tienda para mi local de indumentaria. *' />
              <div className='flex w-full input-contact justify-between button-contact'>
                <div id='redes' className='h-full w-fit flex justify-center items-center'>
                  <div className='flex justify-center items-start gap-3'>
                    <a className='h-10' href={'https://www.linkedin.com/in/nicobarreraj/'}>
                      <FaLinkedin className='text-3xl' />
                    </a>
                    <a className='h-10' href={'https://github.com/nicodsd'}>
                      <FaGithub className='text-3xl' />
                    </a>
                    <a className='h-10' href={'https://www.behance.net/nicobaj'}>
                      <FaBehance className='text-3xl' />
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={cargando}
                  className='bg-[#0600ff] flex items-center justify-center rounded-md w-40 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80 text-sm p-3 text-white text-mono transition-opacity'
                >
                  {cargando ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact