import React from 'react'
import rueda from '../../public/Images/Primer-plano/300ppi/300ppi/Recurso34.png'
import img from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta.png'
import img2 from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta2.png'
import img3 from '../../public/Images/Primer-plano/300ppi/300ppi/Cap_pta3.png'
import devsa from '../../public/Images/diseño-grafico/300ppi/devsarrollo.svg'

function Tecnologias() {
    return (
        <div className='h-fit relative w-full flex flex-col px-14 items-center justify-evenly'>
            <h2 className='w-full text-2xl font-bold text-mono'>Tecnologias<span className=' animate-pulse-slow'>_</span></h2>
            <img className='absolute h-[7rem] opacity-80 bottom-1/2 right-44 drop-shadow-lg animate-spin-slow z-0' src={rueda} alt="rueda" />

            <div className='w-full'>
                <div className='flex w-full flex-col items-center gap-4 text-mono z-10'>

                    <div className='tecnologias h-[30vw] gap-x-10 flex w-full justify-center items-center'>

                        <div className='w-[40%] border-e-4 border-[#0600ff]'>
                            <p className='w-[80%]'>Mi trabajo comienza desde un maquetado en Figma buscando dar sentido a las ideas creativas, luego voy desarrollando las funcionalidades de las aplicaciones.</p>
                        </div>

                        <div className='flex z-10'>
                            <div>
                                <div className='bg-black p-2 rounded-ee-[15px] text-white'>
                                    <p>Frontend</p>
                                    <p className='text-xs'>librerias & CMS</p>
                                </div>
                                <div className='bg-[#FF0080] p-2 rounded-se-[15px] text-white'>
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

                            <div className=' text-white flex flex-col mt-4'>
                                <div className='bg-black p-2 rounded-ee-[15px] rounded-es-[15px]'>Backend</div>
                                <div className='bg-[#FF0080] p-2 rounded-se-[15px] rounded-ss-[15px]'>
                                    <p>NodeJs</p>
                                    <p>ExpressJs</p>
                                    <p>php</p>
                                    <p>Testing</p>
                                </div>
                            </div>

                            <div className='flex flex-col mt-4'>
                                <div className='bg-[#0600ff] p-2 rounded-es-[15px] rounded-ee-[15px] text-white'>Base de Datos</div>
                                <div className='bg-[#FF0080] p-2 rounded-ss-[15px] rounded-se-[15px] text-white'>
                                    <p>Firebase</p>
                                    <p>MongoDB</p>
                                </div>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <div className='bg-[#000000] p-2 rounded-es-[15px] text-white'>Herramientas</div>
                                <div className='bg-[#FFD400] p-2 rounded-ss-[15px]'>
                                    <p>Postman</p>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='relative w-full  h-[28vw] flex items-center drop-shadow-lg selection:bg-transparent'>
                        <img className='absolute h-fit w-[44vw] rounded right-1/4 z-10' src={img} alt="imagen" />
                        <img className='absolute h-fit w-[30vw] rounded right-0 z-0' src={img2} alt="imagen_2" />
                        <img className='absolute h-fit w-[30vw] rounded left-0 z-0' src={img3} alt="imagen_3" />
                        <img className='z-20 absolute bottom-0' src={devsa} alt="devsarrollo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias