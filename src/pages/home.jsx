import React from 'react'
import Navbar from '../components/Navbar'
import Carrousel from '../components/Carrousel'

import plus from '../../public/Images/Primer-plano/300ppi/300ppi/plusplus.svg'
import nicos from '../../public/Images/Primer-plano/300ppi/menjunge.png'
import ojos from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
import logonegro from '../../public/Images/logos/logo-negro.png'
//<img className='h-44 absolute right-[5%] top-[40%]' src={nicos} alt="menjunge" />

function Index() {
  return (
    <>
      <Navbar />
      <div className='cuerpo'>

        <div>
          <img className='logoNico' src={logonegro} alt="logonegro" />
          <div>
            <p className='text-[35px] font-semibold h-10'>Una marca mās,</p>
            <p className='text-2xl fontt'>pero con <strong>personalidad.</strong></p>
          </div>
          <div>
            <p>En un mundo cambiante, eres el responsable de participar en el cambio.</p>
            <p>La vida es demasiada corta para quedarte dentro de una burbuja.</p>
          </div>
        </div>

        <section className='relative h-screen'>
          <div className='nicoBarrera'>
            <p className='text-8xl h-20'>Nico </p>
            <p className='text-8xl'> Barrera <span className='absolute md:-right-9'>.</span></p>
            <p className='asterixco absolute -top-44 -right-8'>*</p>
          </div>
          <p>Desarrollo Full Stack & Diseño Grāfico</p>
          <div className='text-end'>
            <p>UX & UI</p>
            <p>Apps moviles</p>
            <p>Páginas webs</p>
            <p>Diseño Grāfico</p>
          </div>
        </section>

      </div>

      <section className='flex justify-center'>
        <Carrousel />
        <img className='w-[70%]' src={ojos} alt="ojos" />
      </section>

    </>
  )
}

export default Index