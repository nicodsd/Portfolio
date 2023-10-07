import React from 'react'
import formaR from '../../public/Images/diseño-grafico/forma-mob-r.svg'
import formaL from '../../public/Images/diseño-grafico/forma-mob-l.svg'
import mobile from '../../public/Images/fondos-web-proy/mobile-hom.png'

function Mobile() {
  return (
    <div className='min-h-screen flex w-full justify-around items-center'>
      <img src={formaL} alt="" />
      <img className='w-64 h-fit hover:drop-shadow-[6px_10px_0_rgba(0,0,0,1)] hover:opacity-90 hover:scale-[1.05] hover:-skew-x-2 hover:rotate-3 duration-75' src={mobile} alt="" />
      <img src={formaR} alt="" />
    </div>
  )
}

export default Mobile