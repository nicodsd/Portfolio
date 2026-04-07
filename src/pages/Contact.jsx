import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'

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

      <div id='contacto' className='z-20 px-10 md:px- w-full md:pb-16 pb-40 relative max-w-full flex items-center justify-center'>
        <div className='w-full md:px-20 flex flex-col items-center md:flex-row justify-between'>
          <div className='text-mono flex flex-col md:w-[40%] h-full gap-y-4 md:items-start w-full items-center py-10 md:justify-center selection:bg-transparent'>
            {/* <svg className='h-[10vw]' width="150" height="200" viewBox="0 0 220 315" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='forma' d="M0.749025 148.53C0.749024 93.3018 45.5206 48.5303 100.749 48.5303L219.48 48.5303L219.48 205.599C219.48 266 170.515 314.965 110.115 314.965V314.965C49.7136 314.965 0.749027 266 0.749026 205.599L0.749025 148.53Z" fill="#0019FF" /><path id='forma' d="M0.749025 87.0551C0.749024 39.3014 39.461 0.589355 87.2147 0.589354L173.68 0.589352L173.68 124.77C173.68 172.524 134.968 211.236 87.2148 211.236V211.236C39.4611 211.236 0.749026 172.524 0.749026 124.77L0.749025 87.0551Z" fill="#FF0080" /></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="none" className="md:h-[20vw] h-20" viewBox="0 0 293 267"><path id="forma" fill="#0019ff" d="M81.068 122.012c0-67.379 54.622-122 122-122h89.245v34.765c0 55.228-44.771 99.999-100 99.999H81.068z" /><path id="forma" fill="#ffd400" d="M81.069 200.612c0-36.36 29.475-65.835 65.835-65.835h45.41c55.228 0 100 44.771 100 100v31.67H81.069zM.344.012c44.583 0 80.725 36.142 80.725 80.725v54.039H.344z" /><rect id="forma" width="80.725" height="131.67" x=".344" y="134.777" fill="#ff0080" rx="40.362" /></svg>
          </div>
          <div className='flex flex-col w-full md:w-[60%] h-full gap-y-16 items-start justify-center'>
            <div className='flex flex-col gap-y-4 selection:bg-transparent'>
              <p className='md:text-7xl text-5xl text-[#0600ff] font-[900] tracking-tight'>Contáctame</p>
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
