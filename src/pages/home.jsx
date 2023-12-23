import React from 'react'
import ContactHom from './Contact'
import Tecnologias from './Tecnologias'
import Presentacion from './Presentacion'
import Presentacion_2 from './Presentacion_2'
import Proyectos from './Proyectos'
import Mobile from './Mobile'
import Principio from './Principio'
import '../App.css'
import 'animate.css';
//import Ojos from './Ojos'
//import Prueba from './Prueba'

function Index() {

  return (
    <>
      <div className='flex text-mono flex-col h-fit scroll-smooth overflow-x-hidden'>
        <Principio />
        <Presentacion />
        <Presentacion_2 />
        <Proyectos />
        <Mobile />
        <Tecnologias />
        <ContactHom />
      </div>
    </>
  )
}

export default Index