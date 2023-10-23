import React from 'react'
import mobile from '../../public/Images/fondos-web-proy/mobile-hom.png'
import apple from '../../public/Images/contenido/SVG/logo-apple.svg'
import android from '../../public/Images/contenido/SVG/logo-android.svg'

function Mobile() {
  return (
    <div className='md:min-h-screen md:px-14 py-32 flex w-full justify-between items-center text-mono'>
      <svg className='h-20 md:h-[17vw]' width="200" height="200" viewBox="0 0 268 293" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='forma' d="M145.084 81.2607C212.462 81.2607 267.083 135.882 267.083 203.261V292.506H232.319C177.091 292.506 132.319 247.734 132.319 192.506V81.2607H145.084Z" fill="#FFD400"/><path id='forma' d="M132.318 81.2612V192.506C132.318 247.734 87.5468 292.506 32.3184 292.506H0.648697L0.648697 81.2612L132.318 81.2612Z" fill="#0019FF"/><path id='forma' d="M267.083 0.536133C267.083 45.1193 230.942 81.2611 186.359 81.2611H132.319V0.536133L267.083 0.536133Z" fill="#0019FF"/><path id='forma' d="M132.318 0.536133V81.2611L0.648697 81.2611C0.648697 36.6779 36.7905 0.536133 81.3736 0.536133L132.318 0.536133Z" fill="black"/></svg>
      <div className='flex text-[#000000] flex-col items-center gap-y-5 md:gap-y-8 h-full'>
        <h2 className='md:text-5xl text-2xl font-[800] bg-white p-2 px-3 md:p-5 md:px-6 rounded-lg md:rounded-none cap'>@Apps</h2>
        <img className='w-64 h-fit hover:drop-shadow-[3px_5px_0_rgba(0,0,0,1)] md:hover:drop-shadow-[6px_10px_0_rgba(0,0,0,1)] hover:opacity-90 hover:scale-[1.05] hover:-skew-x-2 hover:rotate-3 duration-75' src={mobile} alt="" />
        <div className='flex flex-col font-[300] md:font-[200] text-[13px] md:text-sm text-center text-black'>
          <p>E-commerce</p>
          <p>React Native</p>
          <p>Android & IOS apps</p>
          <div className='flex w-full justify-center gap-3 mt-2 pt-1'>
            <img className='h-5' src={android} alt="" />
            <img className='h-5' src={apple} alt="" />
          </div>
        </div>
      </div>
      <svg className='h-20 md:h-[17vw]' width="200" height="200" viewBox="0 0 268 305" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='forma' d="M167.351 0.714844C222.58 0.714844 267.351 45.4864 267.351 100.715V219.446L100.917 219.446C45.6884 219.446 0.916901 174.674 0.916901 119.446V100.715C0.916901 45.4864 45.6884 0.714844 100.917 0.714844L167.351 0.714844Z" fill="#FF0080"/><path id='forma' d="M267.351 219.446V304.328H0.916901C0.916901 257.449 38.9198 219.446 85.7988 219.446L267.351 219.446Z" fill="black"/></svg>
    </div>
  )
}

export default Mobile