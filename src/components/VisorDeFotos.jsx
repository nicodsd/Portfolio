import React from 'react'

function VisorDeFotos(props) {

  const {
    opnVisor,
    imagen
  } = props

  return (
    <>
      <dialog className='w-full md:absolute fixed overscroll-none animate__animated animate__fadeIn animate__faster h-full flex justify-center items-center bg-[#a5a5a541] backdrop-blur-sm z-50'>
        <p className='text-white text-[4vh] absolute top-5 right-14 px-7 py-3 cursor-pointer rounded-full bg-[#00000070] hover:bg-[#00000034]' onClick={() => { opnVisor() }}>x</p>
        <img className='h-fit w-full' src={imagen} alt="Visualizando imagen" />
      </dialog>
    </>
  )
}

export default VisorDeFotos