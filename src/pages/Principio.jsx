import Carrousel from '../components/Carrousel'

import flecha from '../../public/Images/diseño-grafico/objetos-graficos/arrow2.svg'
import mundo from '../../public/Images/diseño-grafico/iconos/Recurso51.svg'
import burbuja from '../../public/Images/diseño-grafico/iconos/Recurso52.svg'
import asterixco from '../../public/Images/diseño-grafico/objetos-graficos/asterixco.svg'

function Principio() {
    return (
        <>
            <div className='md:h-fit py-8 px-5 selection:bg-transparent md:cuerpo text-mono md:mt-10 z-20 overflow-x-hidden'>
                <img className='animate__fadeIn animate__animated absolute h-[25vw] md:h-[14vw] top-24 md:top-38 left-[5%] sm:left-[10%] md:left-[37%] lg:left-[38%] drop-shadow-xl z-20 asterixco' src={asterixco} alt="asterixco" />
                <div className='flex flex-col items-center md:flex-row md:items-end justify-between'>
                    <div className='flex md:-indent-2 md:text-[10vw] px-1 bg-white md:bg-transparent text-[16vw] flex-col font-[700] z-40 animate__fadeInLeft animate__animated'>
                        <p className='nicoBarrera nico h-[12vw] md:h-[7.6vw]'> Nico </p>
                        <p className='nicoBarrera h-[19vw] md:h-[12vw]'> Barrera </p>
                    </div>
                    <svg className='z-10 w-[60vw] md:w-[46vw] animate__animated animate__backInRight' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.92 350.37"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="por_encima" data-name="por encima"><path className="cls-1" d="M532.27,283.55a68.76,68.76,0,0,1-25.48,11.39c-40.64,7.53-72.59-3.7-90-49.32-18.47-48.33-2.23-85,40.81-89.2,17.71-1.71,33.9.91,47.93,8.27a143,143,0,0,1,15-46.43c-24-12.19-51.63-16.52-81.71-13.58-74.6,7.31-106.43,85.14-74.39,169,30.21,79.1,89.23,84.26,159.7,71.2,13.1-2.44,37-11.35,55.41-29Q550.85,305.88,532.27,283.55Z" /><path className="cls-1" d="M720.15,107q-26.76-33.27-78.68-36.48Q592.1,67.47,560,98.36t-35.37,83q-3.33,53.84,23.48,88.06t78.73,37.45q50.85,3.15,82.1-27.16T743.54,195Q746.93,140.28,720.15,107Zm-31.93,84.52q-2.24,36.16-18,54.84T629.51,263.5q-54.25-3.36-49.58-78.68,2.18-35.12,18.07-53.77t40.78-17.12Q692.83,117.28,688.22,191.53Z" /><path className="cls-1" d="M249.54,73.86l18.22,118.63L116.28,0H46.82l94.75,125.69c-61.8,16.47-96,47.32-120.06,95.94C0,265,0,318.88,0,318.88H69.45C69.64,244.69,115.93,185.47,179.5,176l3.9,5.17,103.78,137.7h63.06l-37.64-245Z" /><circle className="cls-1" cx="349.52" cy="36.99" r="36.86" /></g></g></svg>
                </div>

                <div className='flex items-start justify-between w-full'>
                    <div className='flex mt-8 md:mt-10 w-full md:w-[50%] animate__fadeInLeft animate__animated'>
                        <div className='linea1 h-1 w-[20%] '></div>
                        <div className='linea2 h-1 w-[20%] '></div>
                        <div className='linea3 h-1 w-[20%] '></div>
                        <div className='linea bg-black h-1 w-[100%]'></div>
                    </div>
                </div>

                <section className='flex relative my-8 md:my-14 flex-col md:flex-row gap-y-10 md:gap-0 md:justify-between text-mono'>
                    <div className='w-full md:w-[50%] flex flex-col text-[#3f3f3f] gap-2 animate__fadeInLeft animate__animated'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs md:text-sm w-[80%] font-[300] md:w-[30vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-[#0600ff] md:border-transparent hover:border-[#0600ff]'>En un mundo cambiante, sos el responsable de participar en el cambio.</p>
                            <img className='w-8 md:w-12' src={mundo} alt="mundo" />
                        </div>
                        <div className='flex justify-between items-end'>
                            <p className='text-xs md:text-sm w-[80%] font-[300] md:w-[30vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-[#0600ff] md:border-transparent hover:border-[#0600ff]'>La vida es demasiada corta para quedarse adentro de una burbuja.</p>
                            <img className='w-8 md:w-12' src={burbuja} alt="burbuja" />
                        </div>
                    </div>
                    <div className='flex items-end md:w-[48%] justify-between animate__fadeInBottomRight animate__animated'>
                        <div className='flex'>
                            <img className='h-16 md:h-[100px]' src={flecha} alt="flecha" />
                        </div>
                        <div className='text-end text-[#3f3f3f] text-xs md:text-sm font-[500] text-mono md:w-32'>
                            <p>UX & UI</p>
                            <p>Apps móviles</p>
                            <p>Páginas webs</p>
                            <p>Diseño Grāfico</p>
                        </div>
                    </div>
                </section>
            </div>
            <Carrousel />
        </>
    )
}

export default Principio