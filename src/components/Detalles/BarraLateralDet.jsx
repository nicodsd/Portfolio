import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import arrow from '../../../public/Images/diseño-grafico/300ppi/flecha-sitio2.svg'

function BarraLateralDet(props) {

    const { info } = props

    return (
        <>
            <div>
                <div className='p-3 md:px-10 md:mt-16'>
                    <img className='h-fit w-72 drop-shadow-md  object-contain' src={info?.infoPrincipal?.miniatura} alt={info?.infoPrincipal?.miniatura} />
                    <a href={"https://" + info?.infoPrincipal?.enlace} target="_blank" rel="noopener noreferrer" className='w-full flex mt-4 justify-end items-center cursor-pointer'>
                        <p className='text-xs md:text-[14px] mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-3' src={arrow} alt="Ir al sitio" />
                    </a>
                </div>

                <div className='md:fixed bottom-40 h-fit md:py-8 md:px-10 text-xs md:text-sm gap-3 md:gap-2 w-full p-3 flex flex-col'>
                    <div className='flex'>
                        <p className=' font-[600] '>Duración de proyecto:</p><p className=' font-[300] ml-2'>{info?.infoSecundaria?.duraciónDeProyecto}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Tecnologías:</p><p className=' font-[300] ml-2'>{info?.infoSecundaria?.tecnologias}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Aplicación movil:</p><p className=' font-[300] ml-2'>{info?.infoSecundaria?.appMovil}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Diseño:</p><p className=' font-[300] ml-2'>{info?.infoSecundaria?.diseño}</p>
                    </div>
                    <div className='flex'>
                        <p className=' font-[600] '>Dirigido hacia:</p><p className=' font-[300] ml-2'>{info?.infoSecundaria?.dirigidoHacia}</p>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default BarraLateralDet