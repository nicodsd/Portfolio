import React from 'react'
import formaR from '../../public/Images/diseño-grafico/forma-mob-r.svg'
import formaL from '../../public/Images/diseño-grafico/forma-mob-l.svg'
import mobile from '../../public/Images/fondos-web-proy/mobile-hom.png'

function Mobile() {
  return (
    <div className='min-h-screen flex w-full justify-around items-center text-mono'>
      <img src={formaL} alt="" />
      <div className='flex text-[#000000] flex-col items-center gap-y-8 h-full'>
        <h2 className='text-5xl font-[800] bg-white p-5 px-6 cap'>@Apps</h2>
        <img className='w-64 h-fit hover:drop-shadow-[6px_10px_0_rgba(0,0,0,1)] hover:opacity-90 hover:scale-[1.05] hover:-skew-x-2 hover:rotate-3 duration-75' src={mobile} alt="" />
        <div className='flex flex-col font-[200] text-sm text-center text-black'>
          <p>React Native</p>
          <p>Android & IOS apps</p>
          <p>E-commerce</p>
        </div>
      </div>
      <img src={formaR} alt="" />
    </div>
  )
}

export default Mobile