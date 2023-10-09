import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ATopce from '../components/ATop'
import Contact from './Home-Cont'
import ContactHom from './Contact'
import Carrousel from '../components/Carrousel'
import Tecnologias from './Tecnologias'
import Presentacion from './Presentacion'
import Presentacion_2 from './Presentacion_2'
import Proyectos from './Proyectos'
import Mobile from './Mobile'
import Detalles from './Detalles'

import pls from '../../public/Images/diseño-grafico/300ppi/Recurso63.svg'
import flecha from '../../public/Images/diseño-grafico/300ppi/arrow2.svg'
import mundo from '../../public/Images/logos/Recurso51.svg'
import burbuja from '../../public/Images/logos/Recurso52.svg'
import plus from '../../public/Images/Primer-plano/300ppi/300ppi/plusplus.svg'
import nicos from '../../public/Images/Primer-plano/300ppi/menjunge.png'
import ene from '../../public/Images/logos/logo-negro.png'
import ojos from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
import asterixco from '../../public/Images/diseño-grafico/300ppi/asterixco.svg'
import Ojos from './Ojos'

function Index() {

  return (
    <>
      <div className='w-full h-[8rem] blur-[35px] bg-[#ffffff] absolute'></div>
      <div className='w-full h-[8rem] blur-[35px] bg-[#ffffff]  absolute'></div>
      <Navbar />

      <div className='flex flex-col h-fit bg-[#E2E8EE] selection:bg-transparent'>
        <ATopce />
        <div className='h-fit cuerpo text-mono mt-10 z-20'>
          <img className='absolute h-[12rem] text-[#FFD400] top-32 right-[46%] drop-shadow-xl z-20 asterixco' src={asterixco} alt="asterixco" />
          <div className='flex relative items-end my-10 justify-between'>
            <div className='flex flex-col font-[700]'>
              <p className='nicoBarrera nico text-[11vw] h-[8vw]'> Nico </p>
              <p className='nicoBarrera text-[11vw] h-[14vw]'> Barrera </p>
            </div>
            <svg className='z-10 h-[22vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.92 350.37"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="por_encima" data-name="por encima"><path className="cls-1" d="M532.27,283.55a68.76,68.76,0,0,1-25.48,11.39c-40.64,7.53-72.59-3.7-90-49.32-18.47-48.33-2.23-85,40.81-89.2,17.71-1.71,33.9.91,47.93,8.27a143,143,0,0,1,15-46.43c-24-12.19-51.63-16.52-81.71-13.58-74.6,7.31-106.43,85.14-74.39,169,30.21,79.1,89.23,84.26,159.7,71.2,13.1-2.44,37-11.35,55.41-29Q550.85,305.88,532.27,283.55Z" /><path className="cls-1" d="M720.15,107q-26.76-33.27-78.68-36.48Q592.1,67.47,560,98.36t-35.37,83q-3.33,53.84,23.48,88.06t78.73,37.45q50.85,3.15,82.1-27.16T743.54,195Q746.93,140.28,720.15,107Zm-31.93,84.52q-2.24,36.16-18,54.84T629.51,263.5q-54.25-3.36-49.58-78.68,2.18-35.12,18.07-53.77t40.78-17.12Q692.83,117.28,688.22,191.53Z" /><path className="cls-1" d="M249.54,73.86l18.22,118.63L116.28,0H46.82l94.75,125.69c-61.8,16.47-96,47.32-120.06,95.94C0,265,0,318.88,0,318.88H69.45C69.64,244.69,115.93,185.47,179.5,176l3.9,5.17,103.78,137.7h63.06l-37.64-245Z" /><circle className="cls-1" cx="349.52" cy="36.99" r="36.86" /></g></g></svg>
          </div>
          <div className='flex w-[60%] items-center justify-between'>
          </div>

          <div className='flex items-start justify-between w-full text-mono'>
            <div className='flex mt-4 w-[50%]'>
              <div className='linea1 h-1 w-[20%]'></div>
              <div className='linea2 h-1 w-[20%]'></div>
              <div className='linea3 h-1 w-[20%]'></div>
              <div className='linea bg-black h-1 w-[100%]'></div>
            </div>
          </div>

          <section className='flex relative mt-10 justify-between text-mono'>
            <div className='w-[50%] flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <p className='text-sm w-[28.5vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-transparent hover:border-[#0600ff]'>En un mundo cambiante, sos el responsable de participar en el cambio.</p>
                <img className='h-12' src={mundo} alt="mundo" />
              </div>
              <div className='flex justify-between items-end'>
                <p className='text-sm w-[31vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-transparent hover:border-[#0600ff]'>La vida es demasiada corta para quedarse adentro de una burbuja.</p>
                <img className='h-12' src={burbuja} alt="burbuja" />
              </div>
            </div>
            <div className='flex items-end w-[48%] justify-between'>
              <div className='flex'>
                <img className='h-[110px]' src={flecha} alt="flecha" />
              </div>
              <div className='text-end text-sm text-mono w-32'>
                <p>UX & UI</p>
                <p>Apps móviles</p>
                <p>Páginas webs</p>
                <p>Diseño Grāfico</p>
              </div>
            </div>
          </section>
        </div>
        <div className='mt-10'>
          <Carrousel />
        </div>
        <Presentacion />
        <Presentacion_2 />
        <Proyectos />
        <Mobile />
        <Tecnologias />
        <Ojos />
        <ContactHom />
      </div>
      <Footer />
    </>
  )
}

//<section className='flex justify-center'>
//<Carrousel />
//<img className='w-[70%]' src={ojos} alt="ojos" />
//</section>
export default Index