import React from 'react'
import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../public/Images/diseño-grafico/iconos/github.svg'

function SidebarDetalles(props) {

    const { info, open } = props
    const color = info?.infoSecundaria.color

    return (
        <>
            <div className='w-full h-screen md:w-0 text-mono md:h-0 z-40 relative md:text-[0] md:absolute md:invisible animate__animated animate__faster animate__fadeInLeft'>
                <div onClick={open} className='absolute md:invisible right-4 text-xl font-semibold py-1 px-3 bg-white rounded-full top-4 z-50 shadow-md'>X</div>
                <img className='h-fit max-w-72 object-contain' src={info?.infoPrincipal?.miniatura} alt={info?.infoPrincipal?.titulo} />
                <div className='py-8 px-6 md:text-[0] justify-end items-end bg-white '>
                    <a href={"https://" + info?.infoPrincipal?.enlace} target="_blank" rel="noopener noreferrer" className='mt-6 flex cursor-pointer'>
                        <p className='mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-4' src={arrow} alt="Ir al sitio" />
                    </a>
                    <a href={info?.infoPrincipal?.github} target="_blank" rel="noopener noreferrer" className='flex cursor-pointer'>
                        <p className='mr-3 font-bold'>Repo Github</p>
                        <img className='h-5' src={gitIcon} alt="Ir al github" />
                    </a>
                </div>

                <div style={{ backgroundColor: color }} className='h-full md:text-[0] text-white px-6 py-8 text-sm gap-3 flex flex-col'>
                    <h2 className='text-2xl md:text-[0] font-semibold'>Datos de interés</h2>
                    <div className='flex flex-col'>
                        <p className=' font-[600] '>Duración de proyecto:</p><p className=' font-[300]'>{info?.infoSecundaria?.duraciónDeProyecto}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className=' font-[600] '>Tecnologías:</p><p className=' font-[300]'>{info?.infoSecundaria?.tecnologias}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className=' font-[600] '>Aplicación movil:</p><p className=' font-[300]'>{info?.infoSecundaria?.appMovil}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className=' font-[600] '>Diseño:</p><p className=' font-[300]'>{info?.infoSecundaria?.diseño}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className=' font-[600] '>Dirigido hacia:</p><p className=' font-[300]'>{info?.infoSecundaria?.dirigidoHacia}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarDetalles