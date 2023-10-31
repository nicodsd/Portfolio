import React from 'react'
import ATopce from '../components/ATop'
import ContactHom from './Contact'
import Tecnologias from './Tecnologias'
import Presentacion from './Presentacion'
import Presentacion_2 from './Presentacion_2'
import Proyectos from './Proyectos'
import Mobile from './Mobile'
import Principio from './Principio'
import '../App.css'
import 'animate.css';
import Ojos from './Ojos'

function Index() {

  return (
    <>
      <div className='flex text-mono flex-col h-fit scroll-smooth'>
        <div className='fixed w-full h-[9rem] rounded-t-full bottom-0 z-20 md:invisible bg-gradient-to-t from-[#d1d1d1] via-[#a5a5a541] to-transparent opacity-80'></div>
        <Principio />
        <Presentacion />
        <Presentacion_2 />
        <Proyectos />
        <Mobile />
        <Tecnologias />
        <Ojos />
        <ContactHom />
      </div>
    </>
  )
}

export default Index