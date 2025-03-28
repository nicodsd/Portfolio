import React from 'react'
import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../public/Images/diseño-grafico/iconos/github.svg'
import { Link } from 'react-router-dom'

function SidebarDetalles(props) {

    const { informacion, open } = props
    const color = informacion?.color

    return (
        <>   
            <div className='w-full h-screen bg-white fixed md:w-0 text-mono md:h-0 z-50 top-0 md:text-[0] md:absolute md:invisible animate__animated animate__faster animate__fadeInLeft'>
                <p onClick={open} className='absolute md:invisible right-4 font-semibold py-1 px-3 top-4 bg-white rounded-full z-50'>X</p>
                <img className='h-fit max-w-72 object-contain' src={informacion?.miniatura} alt={informacion?.titulo} />
                <div className='px-3 justify-between items-center bg-white flex py-3 border-b border-gray'>
                    <Link to={"https://" + informacion?.enlace} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <p className='text-xs mr-2 leading-none font-bold'>Ir al sitio</p>
                        <img className='h-4' src={arrow} alt="Ir al sitio" />
                    </Link>
                    <div className='w-[1px] h-5 bg-[#bdbdbd]'></div>
                    <Link href={informacion?.github} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <p className='text-xs mr-2 leading-none font-bold'>Repo Github</p>
                        <img className='h-5' src={gitIcon} alt="Ir al github" />
                    </Link>
                </div>

                <div className='h-fit md:text-[0] text-black px-6 py-8 text-sm gap-3 flex flex-col'>
                    <h2 className='text-2xl md:text-[0] font-semibold'>Datos de interés</h2>
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
        </>
    )
}

export default SidebarDetalles