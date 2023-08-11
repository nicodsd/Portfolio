import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import ATopce from '../components/ATop'

import pls from '../../public/Images/diseño-grafico/300ppi/Recurso63.svg'
import flecha from '../../public/Images/diseño-grafico/300ppi/arrow2.svg'
import mundo from '../../public/Images/logos/Recurso51.svg'
import burbuja from '../../public/Images/logos/Recurso52.svg'
import plus from '../../public/Images/Primer-plano/300ppi/300ppi/plusplus.svg'
import nicos from '../../public/Images/Primer-plano/300ppi/menjunge.png'
import ene from '../../public/Images/logos/logo-negro.png'
import ojos from '../../public/Images/Primer-plano/300ppi/300ppi/ojos.png'
//<img className='h-44 absolute right-[5%] top-[40%]' src={nicos} alt="menjunge" />

function Index() {

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-between min-h-screen h-fit '>
        <ATopce />
        <div className='h-fit cuerpo text-mono mt-24'>
          <div className='flex items-end my-10 justify-between'>
            <div className='nicoBarrera flex flex-col font-semibold'>
              <p className='z-10 text-[11vw] h-[8.5vw]'> Nico </p>
              <p className='z-10 text-[11vw] h-[14vw]'> Barrera </p>
            </div>
            <svg className='z-10 h-[22vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.92 350.37"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="por_encima" data-name="por encima"><path className="cls-1" d="M532.27,283.55a68.76,68.76,0,0,1-25.48,11.39c-40.64,7.53-72.59-3.7-90-49.32-18.47-48.33-2.23-85,40.81-89.2,17.71-1.71,33.9.91,47.93,8.27a143,143,0,0,1,15-46.43c-24-12.19-51.63-16.52-81.71-13.58-74.6,7.31-106.43,85.14-74.39,169,30.21,79.1,89.23,84.26,159.7,71.2,13.1-2.44,37-11.35,55.41-29Q550.85,305.88,532.27,283.55Z" /><path className="cls-1" d="M720.15,107q-26.76-33.27-78.68-36.48Q592.1,67.47,560,98.36t-35.37,83q-3.33,53.84,23.48,88.06t78.73,37.45q50.85,3.15,82.1-27.16T743.54,195Q746.93,140.28,720.15,107Zm-31.93,84.52q-2.24,36.16-18,54.84T629.51,263.5q-54.25-3.36-49.58-78.68,2.18-35.12,18.07-53.77t40.78-17.12Q692.83,117.28,688.22,191.53Z" /><path className="cls-1" d="M249.54,73.86l18.22,118.63L116.28,0H46.82l94.75,125.69c-61.8,16.47-96,47.32-120.06,95.94C0,265,0,318.88,0,318.88H69.45C69.64,244.69,115.93,185.47,179.5,176l3.9,5.17,103.78,137.7h63.06l-37.64-245Z" /><circle className="cls-1" cx="349.52" cy="36.99" r="36.86" /></g></g></svg>
          </div>
          <div className='mt-8 flex w-[50%] items-center justify-between'>
            <div>
              <p className='text-[35px] font-semibold h-10'>Una marca mās,</p>
              <p className='text-2xl fontt'>con mucha <strong>personalidad.</strong></p>
            </div>
            <img className='h-16' src={plus} alt="plus" />
          </div>

          <div className='flex items-start justify-between w-full text-mono font-bold '>
            <div className='flex mt-4 w-[50%]'>
              <div className='linea1 h-1 w-[20%]'></div>
              <div className='linea2 h-2 w-[20%]'></div>
              <div className='linea3 h-3 w-[20%]'></div>
              <div className='linea bg-black h-4 w-[100%] rounded-br-[.6rem]'></div>
            </div>
            <p className='text-lg'>Desarrollo Full Stack & Diseño Grāfico</p>
          </div>

          <section className='flex relative mt-16 pt-14 justify-between text-mono border-t-2 border-black'>
            <div className='w-[47%] flex flex-col gap-3'>
              <div className='flex justify-between items-center'>
                <p className='text-sm w-[30vw]'>En un mundo cambiante, eres el responsable de participar en el cambio.</p>
                <img className='h-12' src={mundo} alt="mundo" />
              </div>
              <div className='flex justify-between items-end'>
                <p className='text-sm w-[30vw]'>La vida es demasiada corta para quedarte dentro de una burbuja.</p>
                <img className='h-12' src={burbuja} alt="burbuja" />
              </div>
            </div>
            <div className='flex items-end w-[47%] justify-between'>
              <div className='flex'>
                <img className='h-[100px]' src={flecha} alt="flecha" />
              </div>
              <div className='text-end text-mono'>
                <p>UX & UI</p>
                <p>Apps moviles</p>
                <p>Páginas webs</p>
                <p>Diseño Grāfico</p>
              </div>
            </div>
          </section>
        </div>

        <div className='relative my-20 h-screen flex justify-between'>
          <div>
          <div className='cap w-[30vh] h-[21vh] bg-[#000]'></div>
          <div className='cap w-[30vh] h-[21vh] -rotate-3 bg-[#000]'></div>
          <div className='cap w-[30vh] h-[21vh] rotate-[10deg] bg-[#000]'></div>
          </div>
          <div className='w-[55%] bg-white texto2 flex flex-col justify-center px-10 z-10'>
            <h2 className='text-2xl font-bold text-mono w-full'>Sobre mi<span className=' animate-pulse-slow'>_</span></h2>
            <h2 className='text-6xl mt-6'>Primero, hola</h2>
            <p className='paraf-ini mt-2'>Me llamo Nicolas Barrera, soy una persona multifacética e inquieta.
              De pequeño me llamaba la atención las computadoras y las artes plásticas, gustándome los graffitis
              y el arte callejero, viendo eso hacia mis propios dibujos y replicaba aquello que me atraía.
              Durante mi vida experimenté con muchas cosas, probándome en la música, conociendo
              nuevos horizontes y encontrándome en el camino.</p>
            <h3 className='haches'>Sobre estudios</h3>
            <p className='paraf-ini'>Estudie dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
              descontinuadas, a pesar de eso pude tener un buen desempeño y siempre focalizándome de tomar de otras
              disciplinas para expandir mi mirada en la vida en general.</p>
            <h3 className='haches'>Virando al diseño...</h3>
            <p className='paraf-ini'>Al comienzo empecé, porque me gustaba expresar mis emociones por medio de ilustraciones
              visuales, dejándome fluir y queriendo transmitir un mensaje de lo que transitaba en esos momentos,
              también me deje influir por la moda y era atento a los detalles visuales que para mí, eran fascinantes.
              Es así como fui ganando experiencia y marcando un trayecto en lo que hoy en dia me gusta que es el área
              del diseño.
              De esta manera fui aprendiendo y conociendo de las herramientas de diseño de manera autodidacta.</p>
            <p className='paraf-ini'>Teniendo en cuenta esto como referencia para crear mi marca y generar una imagen de dinamismo, en
              las formas por los cambios y lo multifacético de mi personalidad.</p>
          </div>
        </div>
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