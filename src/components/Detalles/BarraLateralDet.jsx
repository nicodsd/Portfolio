import React from 'react'
import arrow from '../../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../../public/Images/diseño-grafico/iconos/github.svg'
import { Link } from 'react-router-dom'

function BarraLateralDet(props) {

    const { info } = props

    const color = info?.infoSecundaria.color

    return (
        <>
            <div className='md:max-w-[26vw] bg-gradient-to-b from-white via-transparent to-transparent max-w-0 invisible md:visible z-0 md:z-20'>
                <img className='md:h-fit md:max-w-72 object-contain' src={info?.infoPrincipal?.miniatura} alt={info?.infoPrincipal?.titulo} />
                <div className='md:px-3 lg:px-10 justify-between items-center bg-white flex py-3 border-y border-gray'>
                    <Link to={"https://" + info?.infoPrincipal?.enlace} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer'>
                        <p className='text-[10px] lg:text-[14px] mr-1 lg:mr-3 font-bold'>Ir al sitio</p>
                        <img className='h-3 lg:h-4' src={arrow} alt="Ir al sitio" />
                    </Link>
                    <div className='w-[1px] h-5 bg-[#bdbdbd]'></div>
                    <Link to={info?.infoPrincipal?.github} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer drop-shsmwlg'>
                        <p className='text-[10px] lg:text-[14px] mr-1 lg:mr-3 font-bold'>Repo Github</p>
                        <img className='h-4 lg:h-5' src={gitIcon} alt="Ir al github" />
                    </Link>
                </div>

                <div className='h-fit text-black md:px-6 lg:px-10 md:py-8 text-[0] md:text-sm lg:text-md gap-3 md:gap-2 flex flex-col'>
                    <h2 className='md:text-2xl font-semibold'>Datos de interés</h2>
                    <div className='flex flex-col gap-y-3 mt-2'>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Duración de proyecto:</p><p className=' font-[600]'>{info?.infoSecundaria?.duraciónDeProyecto}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Tecnologías:</p><p className=' font-[600]'>{info?.infoSecundaria?.tecnologias}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Aplicación movil:</p><p className=' font-[600]'>{info?.infoSecundaria?.appMovil}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Diseño:</p><p className=' font-[600]'>{info?.infoSecundaria?.diseño}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className=' font-[200] text-xs '>Dirigido hacia:</p><p className=' font-[600]'>{info?.infoSecundaria?.dirigidoHacia}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BarraLateralDet