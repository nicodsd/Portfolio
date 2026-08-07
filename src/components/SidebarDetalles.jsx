import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio2.svg'
import gitIcon from '../../public/Images/diseño-grafico/iconos/github.svg'
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiExpress, SiPhp, SiMysql, SiPostman, SiAstro, SiBootstrap, SiCloudinary, SiMongodb, SiCss } from 'react-icons/si'

function SidebarDetalles(props) {

    const { informacion, open } = props
    const techLogos = [
        { nombre: "Html", node: <FaHtml5 className="text-[#000000]" /> },
        { nombre: "Css", node: <SiCss className="text-[#000000]" /> },
        { nombre: "Javascript", node: <FaJs className="text-[#000000]" /> },
        { nombre: "React", node: <FaReact className="text-[#000000]" /> },
        { nombre: "Bootstrap", node: <SiBootstrap className="text-[#000000]" /> },
        { nombre: "Nodejs", node: <FaNodeJs className="text-[#000000]" /> },
        { nombre: "MongoDB", node: <SiMongodb className="text-[#000000]" /> },
        { nombre: "Cloudinary", node: <SiCloudinary className="text-[#000000]" /> },
        { nombre: "Astro", node: <SiAstro className="text-[#000000]" /> },
        { nombre: "TailwindCss", node: <SiTailwindcss className="text-[#000000]" /> },
        { nombre: "NextJs", node: <SiNextdotjs className="text-[#000000]" /> },
        { nombre: "NextJs", node: <SiNextdotjs className="text-[#000000]" /> },
        { nombre: "ExpressJS", node: <SiExpress className="text-[#000000]" /> },
        { nombre: "PHP", node: <SiPhp className="text-[#000000]" /> },
        { nombre: "MySQL", node: <SiMysql className="text-[#000000]" /> },
        { nombre: "Postman", node: <SiPostman className="text-[#000000]" /> },
        { nombre: "Figma", node: <FaFigma className="text-[#000000]" /> },
        { nombre: "Git", node: <FaGitAlt className="text-[#000000]" /> },
        { nombre: "AWS", node: <FaAws className="text-[#000000]" /> }
    ]

    return (
        <>
            <div className='w-full h-screen bg-white fixed md:w-0 text-mono md:h-0 z-50 top-0 md:text-[0] md:absolute md:invisible animate__animated animate__faster animate__fadeInLeft'>
                <p onClick={open} className='absolute md:invisible right-4 font-semibold py-1 px-3 top-4 bg-white rounded-full z-50'>X</p>
                <img className='h-fit object-contain' src={informacion?.miniatura} alt={informacion?.titulo} />
                <div className='md:px-1 lg:px-7 justify-end items-center flex py-3 pt-10 border-b border-gray-100'>
                    <a href={"https://" + informacion?.enlace} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <img className='h-4' src={arrow?.src} alt="Ir al sitio" />
                    </a>
                    <a href={informacion?.github} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer border border-transparent hover:border-black hover:translate-x-1 duration-75 hover:shadow-[-4px_4px_0_rgba(0,0,0,0.1)] hover:-translate-y-1 py-2 px-3 rounded-full'>
                        <img className='h-5' src={gitIcon?.src} alt="Ir al github" />
                    </a>
                </div>

                <div className='h-fit md:text-[0] text-black px-6 py-8 text-sm gap-3 flex flex-col'>
                    <h2 className='text-2xl md:text-[0] font-semibold'>Datos de interés</h2>
                    <div className='flex flex-col'>
                        <p className=' font-[200] text-xs '>Duración de proyecto:</p><p className=' font-[600]'>{informacion?.duraciónDeProyecto}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-extralight text-xs'>Tecnologías:</p>
                        <div className='flex flex-wrap gap-2'>
                            {informacion?.tecnologias.map((tech, index) => (
                                <div key={index} className='text-4xl'>
                                    {techLogos.find(logo => logo.nombre === tech)?.node}
                                </div>
                            ))}
                        </div>
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