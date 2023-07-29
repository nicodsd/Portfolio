import React from 'react'
import Navbar from '../components/Navbar'
import nicos from '../../public/Images/Primer-plano/300ppi/menjunge.png'
import nombre from '../../public/Images/Primer-plano/300ppi/Nombre-cabecera.png'
import ojos from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
import Carrousel from '../components/Carrousel'

function Index() {
  return (
    <>
      <Navbar />
      <section className='h-screen'>
        <img className='w-[80%] absolute top-[15%]' src={nombre} alt="nico-barrera" />
        <img className='h-44 absolute right-[5%] top-[40%]' src={nicos} alt="menjunge" />
      </section>
      <section className='flex justify-center'>
        <Carrousel/>
        <img className='w-[70%]' src={ojos} alt="ojos" />
      </section>
    </>
  )
}

export default Index