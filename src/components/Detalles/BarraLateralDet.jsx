import React from 'react'
import arrow from '../../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../../public/Images/diseño-grafico/iconos/github.svg'
import { Link } from 'react-router-dom'

function BarraLateralDet(props) {

    const { informacion } = props

    const color = informacion?.color

    return (
        <>
            <div className='md:max-w-[24vw] overflow-y-auto bg-gradient-to-b bg-white max-w-0 invisible md:visible z-0 md:z-20 rounded-lg'>
                <img className='md:h-fit md:max-w-72 object-contain rounded-lg' src={informacion?.miniatura} alt={informacion?.titulo} />
                <div className='md:px-1 lg:px-7 justify-between items-center bg-white flex py-3 pt-10 border-b border-gray'>
                    <Link to={"https://" + informacion?.enlace} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <p className='text-[10px] leading-none lg:text-[14px] mr-1 lg:mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-3 lg:h-4' src={arrow} alt="Ir al sitio" />
                    </Link>
                    <div className='w-[1px] h-5 bg-[#bdbdbd]'></div>
                    <Link to={informacion?.github} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <p className='text-[10px] leading-none lg:text-[14px] mr-1 lg:mr-3 font-bold'>Repo Github</p>
                        <img className='h-4 lg:h-5' src={gitIcon} alt="Ir al github" />
                    </Link>
                </div>

                <div className='h-fit text-black md:px-4 lg:px-10 md:py-8 text-[0] md:text-sm lg:text-md gap-3 md:gap-2 flex flex-col'>
                    <h2 className='md:text-2xl font-semibold'>Datos de interés</h2>
                    <div className='flex flex-col gap-y-3 mt-2'>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Duración de proyecto:</p><p className=' font-[600]'>{informacion?.duraciónDeProyecto}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Tecnologías:</p><p className=' font-[600]'>{informacion?.tecnologias}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Aplicación movil:</p><p className=' font-[600]'>{informacion?.appMovil}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Diseño:</p><p className=' font-[600]'>{informacion?.diseño}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Dirigido hacia:</p><p className=' font-[600]'>{informacion?.dirigidoHacia}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarraLateralDet