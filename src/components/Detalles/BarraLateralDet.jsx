import React, { useRef } from 'react'
import { Link as Anchor } from 'react-router-dom'
import arrow from '../../../public/Images/diseño-grafico/300ppi/flecha-sitio2.svg'

function BarraLateralDet(props) {

    let cons = 'absolute z-30 md:relative w-[70%] md:w-[40%] min-h-screen py-12 flex flex-col justify-between bg-[#ffffff] gap-10'


    return (
        <>
            <div className={cons}>
                <div className='p-3 md:px-10'>
                    <img className='h-fit drop-shadow-md rounded-md object-contain' src={img} alt="" />
                    <Anchor to={""} className='w-full mt-6 flex justify-start items-center cursor-pointer'>
                        <p className='text-xs text-[14px] mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-3' src={arrow} alt="Ir al sitio" />
                    </Anchor>
                </div>

                <div className='md:fixed bottom-40 h-fit md:py-8 md:px-10 text-xs md:text-sm gap-3 md:gap-2 w-full p-3 flex flex-col'>
                    <div className='flex'>
                        <p className=' font-[600] '>Duración de proyecto:</p><p className=' font-[300] ml-2'>{`${"2 semanas"}`}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Tecnologías:</p><p className=' font-[300] ml-2'>{`${"Javascript, Css, Html"}`}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Aplicación movil:</p><p className=' font-[300] ml-2'>{`${"No"}`}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Diseño:</p><p className=' font-[300] ml-2'>{`${"Nicolas Barrera"}`}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Dirigido hacia:</p><p className=' font-[300] ml-2'>{`${"MindHub L.A."}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarraLateralDet