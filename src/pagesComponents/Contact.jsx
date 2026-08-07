import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'motion/react'
import DitheredObject from '../components/canvasui/DitheredObject'

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
      {enviado &&
        <div className='selection:bg-transparent w-fit drop-shadow-md flex bg-white -translate-y-16 md:-translate-y-20 rounded-md md:rounded-lg fixed h-fit modal-enviado z-10'>
          <div className='flex flex-col bg-white cursor-default p-4 md:p-6 rounded-l-md md:rounded-l-lg'>
            <h2 className='font-semibold flex flex-wrap'>{res}</h2>
          </div>
          <div className='text-white'>
            <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#0600ff] hover:opacity-80 cursor-pointer flex justify-center items-center rounded-r-md md:rounded-r-lg text-xl'>X</p>
          </div>
        </div>
      }

      <div id='contacto' className='z-20 px-10 w-full md:pb-0 pb-40 relative max-w-full flex items-center justify-center'>
        <div className='w-full md:px-20 flex flex-col items-center md:flex-row justify-between'>
          <div className='text-mono flex flex-col md:w-[40%] h-[60vw] md:h-[30vw] min-h-62.5 relative gap-y-4 md:items-start w-full items-center py-10 md:justify-center selection:bg-transparent'>
            <DitheredObject
              src="/Images/diseño-grafico/objetos-graficos/contact.svg"
              method="halftone"
              gridSize={0}
              pixelSizeRatio={1}
              environmentIntensity={1}
              roughness={0}
              scale={4}
              xOffset={0}
              yOffset={0}
              floatIntensity={0}
              rotationIntensity={1}
              floatSpeed={0}
              fov={70}
              cameraDistance={5}
              grayscale={false}
              invert={false}
              dither={true}
              autoRotate={true}
              zoom={false}
              highlight="#FFD440"
              className="w-full h-full absolute inset-0"
            />
          </div>
          <div className='flex flex-col w-full md:w-[60%] h-full gap-y-16 items-start justify-center'>
            <div className='flex flex-col gap-y-4 selection:bg-transparent'>
              <motion.div
                className='md:text-7xl text-5xl text-[#0600ff] font-black tracking-tight flex'
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              >
                {"Hablemos".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 60, rotateX: -40 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <p className='text-lg lg:text-start lg:text-lg'>
                ¿Tenés alguna idea en mente? ¿Necesitás ayuda con algún proyecto? ¿Querés que trabajemos juntos?
                <br className='hidden md:block' />
                {" "}No dudes en escribirme, te responderé a la brevedad.
              </p>
            </div>

            <form onSubmit={sendMail} className='flex justify-center h-full w-full flex-col text-[13px] md:text-sm gap-y-10'>
              <div className='w-full flex gap-x-4 text-mono'>
                <input
                  className='w-full border-b bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                  type="text"
                  ref={nombre}
                  required
                  autoComplete='off'
                  placeholder='Nombre *' />
                <input
                  className='w-full border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
                  type="email"
                  ref={correo}
                  required
                  autoComplete='off'
                  placeholder='Correo *' />
              </div>
              <input
                ref={comentarios}
                className='w-full border-b-[1px] bg-transparent focus:outline-none h-fit text-mono border-[#000000] placeholder:text-[#0600ff]'
                type="text"
                required
                autoComplete='off'
                placeholder='Comentarios *' />
              <div className='flex w-full justify-end'>
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
    </div >
  )
}

export default Contact
