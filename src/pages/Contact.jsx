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

  const sendMail = (e) => {
    e.preventDefault()

    if (
      nombre?.current?.value.length > 0 &&
      correo?.current?.value.length > 0 &&
      comentarios?.current?.value.length > 0
    ) {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: nombre.current.value,
          email: correo.current.value,
          message: comentarios.current.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          setRes("Mensaje enviado!")
          setEnviado(true)
          quitarAlertaTemp()
        }).catch(err => {
          console.error(err)
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
          <div className='text-white'>
            <p onClick={quitarAlerta} className='h-full w-9 md:w-7 bg-[#0600ff] hover:opacity-80 cursor-pointer flex justify-center items-center rounded-l-md md:rounded-l-lg text-xl'>X</p>
          </div>
          <div className='flex flex-col bg-white cursor-default p-4 md:p-6 rounded-md md:rounded-lg'>
            <h2 className='font-semibold flex flex-wrap'>{res}</h2>
          </div>
        </div>
      }

      <div id='contacto' className='z-20 px-10 w-full md:pb-16 pb-40 relative max-w-full flex items-center justify-center'>
        <div className='w-full md:px-20 flex flex-col items-center md:flex-row justify-between'>
          <div className='text-mono flex flex-col md:w-[40%] h-[60vw] md:h-[30vw] min-h-[250px] relative gap-y-4 md:items-start w-full items-center py-10 md:justify-center selection:bg-transparent'>
            <DitheredObject
              src="/Images/diseño-grafico/objetos-graficos/contact.svg"
              method="halftone"
              gridSize={2}
              pixelSizeRatio={2}
              environmentIntensity={1.2}
              roughness={0}
              scale={4}
              xOffset={0}
              yOffset={0}
              floatIntensity={0}
              rotationIntensity={1}
              floatSpeed={0}
              fov={60}
              cameraDistance={5}
              grayscale={false}
              invert={false}
              dither={true}
              autoRotate={true}
              zoom={false}
              highlight="#FF0080"
              className="w-full h-full absolute inset-0"
            />
          </div>
          <div className='flex flex-col w-full md:w-[60%] h-full gap-y-16 items-start justify-center'>
            <div className='flex flex-col gap-y-4 selection:bg-transparent'>
              <motion.div
                className='md:text-7xl text-5xl text-[#0600ff] font-[900] tracking-tight flex'
                initial="hidden" whileInView="show" viewport={{ once: true }}
                variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              >
                {"Contáctame".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 60, rotateX: -40 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <p className='text-lg parrafo text- lg:text-start lg:text-lg'>
                ¿Tenés alguna idea en mente? ¿Necesitás ayuda con algún proyecto? ¿Querés que trabajemos juntos?
                <br className='hidden md:block' />
                {" "}No dudes en escribirme, te responderé a la brevedad.
              </p>
            </div>

            <form onSubmit={sendMail} className='flex justify-center h-full w-full flex-col text-[13px] md:text-sm gap-y-10'>
              <div className='w-full flex gap-x-4 text-mono'>
                <input
                  className='w-full border-b-[1px] bg-transparent focus:outline-none border-[#000000] placeholder:text-[#0600ff]'
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
                <input
                  className='bg-[#0600ff] rounded-md w-40 cursor-pointer text-sm p-3 text-white text-mono'
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact
