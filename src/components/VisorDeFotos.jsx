import React from 'react'

function VisorDeFotos(props) {

    const { opnVisor, imagen, verColor } = props
    console.log(verColor)

  return (
    <>
        <div className='w-full h-full flex justify-center items-center bg-[#00000069] absolute z-50'>
            <p className='text-white text-[4vh] absolute top-5 right-14 px-7 py-3 cursor-pointer rounded-full bg-[#00000070] hover:bg-[#00000034]' onClick={()=>{opnVisor()}}>x</p>
            <img className=' ' src={imagen} alt="Visualizando imagen" />
        </div>
    </>
  )
}

export default VisorDeFotos