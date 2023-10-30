import React from 'react'
import arrow from '../../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../../public/Images/diseño-grafico/iconos/github.svg'

function BarraLateralDet(props) {

    const { info } = props

    const color = info?.infoSecundaria.color

    return (
        <>
            <div style={{ backgroundColor: color }} className='md:max-w-[26vw] max-w-0 invisible md:visible z-0 md:z-20'>
                <img className='md:h-fit md:max-w-72 object-contain' src={info?.infoPrincipal?.miniatura} alt={info?.infoPrincipal?.titulo} />
                <div className='py-10 md:px-6 lg:px-10 justify-end items-end bg-white '>
                    <a href={"https://" + info?.infoPrincipal?.enlace} target="_blank" rel="noopener noreferrer" className='mt-6 flex cursor-pointer'>
                        <p className='text-[0] md:text-[14px] mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-4' src={arrow} alt="Ir al sitio" />
                    </a>
                    <a href={info?.infoPrincipal?.github} target="_blank" rel="noopener noreferrer" className='flex cursor-pointer drop-shadow-md'>
                        <p className='text-[0] md:text-[14px] mr-3 font-bold'>Repo Github</p>
                        <img className='h-5' src={gitIcon} alt="Ir al github" />
                    </a>
                </div>

                <div className='h-fit text-white md:px-6 lg:px-10 md:py-8 text-[0] md:text-sm lg:text-md gap-3 md:gap-2 flex flex-col'>
                    <h2 className='md:text-2xl font-semibold'>Datos de interés</h2>
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

export default BarraLateralDet