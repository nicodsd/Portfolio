import React from 'react'
import flech1 from '../../public/Images/diseño-grafico/300ppi/flecha-contact.svg'
import { Link as Anchor } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-[#0600ff] h-[10.5rem] w-full text-white text-mono p-8 z-40 relative flex justify-between'>

      <div className='h-full w-[10%] flex flex-col justify-between'>
        <p className='text-[2.8vh] font-[700]'>redes<span className='animate-pulse-slow'>_</span></p>
        <div>
          <a href='https://www.behance.net/nicobaj' >
            <p className='h-5'>Github</p>
          </a>
          <a href=''>
            <p className='h-5'>Bēhance</p>
          </a>
          <a href='https://www.linkedin.com/in/nicobarrerarg/'>
            <p>Linkedin</p>
          </a>
        </div>
      </div>

      <div className='w-[30%] border-s-2 flex flex-col justify-between items-end'>
        <Anchor className='flex text-[2.8vh] hover:animate-pulse font-[700] justify-between items-center'>
          <p className='mr-2'>Contacta conmigo</p>
          <img className='h-5' src={flech1} alt="" />
        </Anchor>
        <div className='flex flex-col w-full items-end'>
          <svg className='ncofoot' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.92 350.37"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="por_encima" data-name="por encima"><path className="nico" d="M532.27,283.55a68.76,68.76,0,0,1-25.48,11.39c-40.64,7.53-72.59-3.7-90-49.32-18.47-48.33-2.23-85,40.81-89.2,17.71-1.71,33.9.91,47.93,8.27a143,143,0,0,1,15-46.43c-24-12.19-51.63-16.52-81.71-13.58-74.6,7.31-106.43,85.14-74.39,169,30.21,79.1,89.23,84.26,159.7,71.2,13.1-2.44,37-11.35,55.41-29Q550.85,305.88,532.27,283.55Z" /><path className="nico" d="M720.15,107q-26.76-33.27-78.68-36.48Q592.1,67.47,560,98.36t-35.37,83q-3.33,53.84,23.48,88.06t78.73,37.45q50.85,3.15,82.1-27.16T743.54,195Q746.93,140.28,720.15,107Zm-31.93,84.52q-2.24,36.16-18,54.84T629.51,263.5q-54.25-3.36-49.58-78.68,2.18-35.12,18.07-53.77t40.78-17.12Q692.83,117.28,688.22,191.53Z" /><path className="nico" d="M249.54,73.86l18.22,118.63L116.28,0H46.82l94.75,125.69c-61.8,16.47-96,47.32-120.06,95.94C0,265,0,318.88,0,318.88H69.45C69.64,244.69,115.93,185.47,179.5,176l3.9,5.17,103.78,137.7h63.06l-37.64-245Z" /><circle className="nico" cx="349.52" cy="36.99" r="36.86" /></g></g></svg>
          <p className='text-xs mt-1 text-end'>© Nico Barrera 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer