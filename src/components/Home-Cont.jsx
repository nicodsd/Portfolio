import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import {HiArrowLongRight} from 'react-icons/hi2'

import flecha5 from '../../public/Images/diseño-grafico/300ppi/flecha-5.svg'

function Contact() {

  const contactoDiseño = () => {

  }

  return (
    <>
      <div className='h-screen relative w-full flex justify-center items-center'>
          <p className='absolute text-mono font-semibold text-[200px] text-[#ffffff] left-1'>"</p>
          <p className='absolute text-mono font-semibold text-[200px] text-[#ffffff] right-1'>"</p>
        <div className='text-mono text-xl flex items-center font-semibold text-[#0600ff] z-10'>
          <p>Contame un poco de lo tienes en mente</p>
          <div className='flex items-center ml-6'>
            <div className='h-[3px] w-24 bg-[#0600ff]'></div>
            <Anchor onClick={()=>contactoDiseño} className='border-[3px] border-[#0600ff] hover:bg-[#ffffff] duration-100 rounded-full px-7 text-[60px]'><HiArrowLongRight className='h-10'/></Anchor>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact