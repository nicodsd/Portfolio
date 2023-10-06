import React from 'react'
import arrow from '../../public/Images/diseño-grafico/300ppi/flecha-sitio.svg'

function Cards(props) {

    let { imag, titulo, descripcion } = props

    return (
        <div className='flex flex-col max-w-[23rem] duration-100 hover:shadow-[-10px_10px_0_rgba(0,0,0,1)] hover:translate-x-[10px] hover:-translate-y-[10px]'>
            <div className='h-fit relative cursor-pointer'>
                <img className='object-contain w-fit' src={imag} alt={titulo} />
            </div>
            <div className='font-mono flex flex-col p-2 justify-between text-white h-[8rem] bg-[#0600ff]'>
                <div>
                    <h2 className='font-[600] text-xl'>{titulo}</h2>
                    <p className='w-[95%] text-xs text-[#E2E8EE]'>{descripcion}<span className='font-[900] ml-1 cursor-pointer'>Ver más</span></p>
                </div>
                <div className='w-full flex justify-end items-center cursor-pointer'>
                    <p className='text-[14px] mr-3 font-bold'>Ir al sitio</p>
                    <img className='h-3' src={arrow} alt="Ir al sitio" />
                </div>
            </div>
        </div>
    )
}

export default Cards