import React from 'react'
import rueda from '../../public/Images/Primer-plano/300ppi/300ppi/Recurso34.png'
import img from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta.png'
import img2 from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta2.png'
import img3 from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta3.png'
import devsa from '../../public/Images/diseño-grafico/300ppi/devsarrollo.svg'
import flecha from '../../public/Images/contenido/SVG/flecha.svg'

function Tecnologias() {
    return (
        <div className='h-fit relative w-full text-mono flex flex-col px-5 lg:px-14 items-center justify-evenly'>
            <h2 id='tecnologias' className='w-full pt-20 text-2xl lg:text-3xl font-bold'>Tecnologias<span className=' animate-pulse-slow'>_</span></h2>
            <img className='absolute h-[4.5rem] z-30 lg:h-[7rem] bottom-[40vw] sm:bottom-[34vw] lg:bottom-[30vw] right-10 lg:right-[10vw] animate-spin-slow' src={rueda} alt="rueda" />

            <div className='w-full'>
                <div className='flex w-full flex-col items-center gap-y-10 md:gap-4 z-10'>

                    <div className='md:h-[45vw] lg:h-[30vw] gap-y-10 md:gap-y-0 flex flex-col md:flex-row w-full md:justify-between items-center'>

                        <div className='md:w-[50%] pb-6 border-b-2 md:border-b-0 border-[#0600ff] lg:border-e-4 lg:border-[#0600ff]'>
                            <p className='text-xs md:text-base font-[300] md:w-[80%] pt-2'>Mi trabajo comienza desde un maquetado en Figma buscando dar sentido a las ideas creativas, luego voy desarrollando las funcionalidades de las aplicaciones.</p>
                        </div>

                        <div className='flex z-10 md:w-[48%] justify-center'>
                            <div>
                                <div className='bg-black md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-ee-[15px] text-white'>
                                    <p>Frontend</p>
                                    <p className='text-xs'>librerias & CMS</p>
                                </div>
                                <div className='bg-[#FF0080] md:p-2 relative z-20 p-[7.5px] text-[11px] md:text-sm rounded-se-[15px] text-white'>
                                    <p>Html</p>
                                    <p>Javascript</p>
                                    <p>Css</p>
                                    <p>React</p>
                                    <p>React Native</p>
                                    <p>Boostrap</p>
                                    <p>Tailwind</p>
                                    <p>WordPress</p>
                                </div>
                            </div>

                            <div className='text-white flex flex-col mt-4'>
                                <div className='bg-black md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-ee-[15px] rounded-es-[15px]'>Backend</div>
                                <div className='bg-[#FF0080] md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-se-[15px] rounded-ss-[15px]'>
                                    <p>NodeJs</p>
                                    <p>ExpressJs</p>
                                    <p>php</p>
                                    <p>Testing</p>
                                </div>
                            </div>

                            <div className='flex flex-col mt-4'>
                                <div className='bg-[#000000] md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-es-[15px] rounded-ee-[15px] text-white'>Base de Datos</div>
                                <div className='bg-[#FF0080] md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-ss-[15px] rounded-se-[15px] text-white'>
                                    <p>Firebase</p>
                                    <p>MongoDB</p>
                                    <p>MySql</p>
                                </div>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <div className='bg-[#000000] md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-es-[15px] text-white'>Herramientas</div>
                                <div className='bg-[#FFD400] md:p-2 p-[7.5px] text-[11px] md:text-sm rounded-ss-[15px]'>
                                    <p>Postman</p>
                                    <p>Figma</p>
                                    <p>Git</p>
                                    <p>GitHub</p>
                                </div>
                            </div>
                            <img className='absolute h-[60vw] sm:h-[25vw] z-10 bottom-[24vw] md:rotate-12' src={flecha} alt="flecha" />
                        </div>

                    </div>
                    <div className='relative w-full h-[45vw] md:h-[30vw] flex items-center justify-center selection:bg-transparent z-10'>
                        <img className='absolute h-fit w-[50vw] md:w-[44vw] rounded md:rounded-md shadow-[0px_5px_0_rgba(0,0,250,1)] z-10 md:shadow-[0px_12px_0_rgba(0,0,250,1)]' src={img} alt="imagen" />
                        <img className='absolute h-fit w-[40vw] rotate-6 md:rotate-0 opacity-95 md:w-[30vw] rounded md:rounded-md -right-2 shadow-[0px_4px_0_rgba(260,0,100,1)] md:shadow-[0px_9px_0_rgba(260,0,100,1)]' src={img2} alt="imagen_2" />
                        <img className='absolute h-fit w-[40vw] -rotate-6 md:rotate-0 opacity-95 md:w-[30vw] rounded md:rounded-md -left-2 shadow-[0px_4px_0_rgba(260,0,100,1)] md:shadow-[0px_9px_0_rgba(260,0,100,1)]' src={img3} alt="imagen_3" />
                        <img className='z-20 absolute bottom-0 opacity-0 md:opacity-100' src={devsa} alt="devsarrollo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias