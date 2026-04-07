import rueda from '../../public/Images/Primer-plano/Recurso34.png'
import img from '../../public/Images/Primer-plano/Cap_pta.png'
import img2 from '../../public/Images/Primer-plano/Cap_pta2.png'
import img3 from '../../public/Images/Primer-plano/Cap_pta3.png'
import flecha from '../../public/Images/diseño-grafico/objetos-graficos/flecha.svg'

function Tecnologias() {
    return (
        <div className='h-fit relative selection:bg-transparent w-full text-mono flex flex-col items-center justify-evenly'>
            <div className='w-full flex flex-col items-center md:flex-row justify-between'>
                <div id='tecnologias' className='h-full md:ml-6 border-x border-t p-5 rounded-t-lg'>
                    <h2 className='w-full text-2xl lg:text-3xl font-bold'>Tecnologías</h2>
                    <p className='text-sm md:text-base leading-5 font-[300] md:w-[80%] parrafo pt-2'>Mi trabajo comienza desde un maquetado en Figma, buscando dar sentido a las ideas creativas, luego voy desarrollando las funcionalidades de las aplicaciones.</p>
                </div>
                <img className='absolute h-[4.5rem] z-30 lg:h-[7rem] bottom-[40vw] sm:bottom-[34vw] lg:bottom-[30vw] right-10 lg:right-[10vw] animate-spin-slow' src={rueda} alt="rueda" />
                <div className='flex flex-col md:flex-row mt-10 md:mt-0 w-full md:justify-center items-center'>
                    <div className='flex z-10 tracking-tight justify-center w-full items-start'>
                        <div className='w-full md:w-fit'>
                            <div className='bg-black md:p-3 py-[5px] px-[6px] text-xs md:text-lg md:rounded-ee-[15px] rounded-ee-[10px] text-white'>
                                <p>Frontend</p>
                            </div>
                            <div className='bg-[#FF0080] parrafo md:p-3 relative z-20 py-[5px] px-[6px] text-sm md:text-lg md:rounded-se-[15px] rounded-se-[10px] text-white'>
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

                        <div className='text-white flex flex-col'>
                            <div className='bg-black md:p-3 py-[5px] px-[6px] text-sm md:text-lg md:rounded-ee-[15px] rounded-ee-[10px] md:rounded-es-[15px] rounded-es-[10px]'>
                                <p>Backend</p>
                            </div>
                            <div className='bg-[#FF0080] parrafo md:p-3 py-[5px] px-[6px] text-sm md:text-lg md:rounded-se-[15px] rounded-se-[10px] md:rounded-ss-[15px] rounded-ss-[10px]'>
                                <p>NodeJs</p>
                                <p>NextJs</p>
                                <p>ExpressJs</p>
                                <p>php</p>
                                <p>Testing</p>
                            </div>
                        </div>

                        <div className='flex flex-col '>
                            <div className='bg-[#000000] md:p-3 py-[5px] px-[6px] text-sm  md:text-lg md:rounded-es-[15px] rounded-es-[10px] md:rounded-ee-[15px] rounded-ee-[10px] text-white'>
                                <p>Databases</p>
                            </div>
                            <div className='bg-[#FF0080] parrafo md:p-3 py-[5px] px-[6px] text-sm md:text-lg md:rounded-ss-[15px] rounded-ss-[10px] md:rounded-se-[15px] rounded-se-[15px] text-white'>
                                <p>Firebase</p>
                                <p>MongoDB</p>
                                <p>MySql</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='bg-[#000000] md:p-3 py-[5px] px-[6px] text-xs md:text-lg md:rounded-es-[15px] rounded-es-[10px] text-white'>
                                <p>Herramientas</p>
                            </div>
                            <div className='bg-[#FFD400] parrafo md:p-3 py-[5px] px-[6px] text-sm md:text-lg md:rounded-ss-[15px] rounded-ss-[10px]'>
                                <p>Postman</p>
                                <p>Figma</p>
                                <p>Git</p>
                                <p>GitHub</p>
                            </div>
                        </div>
                        <img className='absolute h-[50vw] sm:h-[20vw] drop-shadow-md z-10 bottom-[23vw] md:bottom-[24vw] md:rotate-12' src={flecha} alt="flecha" />
                    </div>
                </div>
            </div>
            <div className='relative w-full md:pt-10 h-[45vw] md:h-[30vw] flex items-center justify-center selection:bg-transparent z-10'>
                <img className='absolute h-fit w-[50vw] md:w-[44vw] rounded md:rounded-md shadow-[0px_5px_0_rgba(0,0,250,1)] z-10 md:shadow-[0px_12px_0_rgba(0,0,250,1)]' src={img} alt="imagen" />
                <img className='absolute h-fit w-[40vw] rotate-6 md:rotate-0 opacity-95 md:opacity-90 md:w-[30vw] rounded md:rounded-md -right-2 shadow-[0px_4px_0_rgba(260,0,100,1)] md:shadow-[0px_9px_0_rgba(260,0,100,1)]' src={img2} alt="imagen_2" />
                <img className='absolute h-fit w-[40vw] -rotate-6 md:rotate-0 opacity-95 md:opacity-90 md:w-[30vw] rounded md:rounded-md -left-2 shadow-[0px_4px_0_rgba(260,0,100,1)] md:shadow-[0px_9px_0_rgba(260,0,100,1)]' src={img3} alt="imagen_3" />
            </div>
        </div>
    )
}

export default Tecnologias