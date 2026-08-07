import rueda from '../../public/Images/Primer-plano/Recurso34.png'
import img from '../../public/Images/Primer-plano/Cap_pta.png'
import img2 from '../../public/Images/Primer-plano/Cap_pta2.png'
import img3 from '../../public/Images/Primer-plano/Cap_pta3.png'
import flecha from '../../public/Images/diseño-grafico/objetos-graficos/flecha.svg'
import { motion } from 'motion/react'
import LogoLoop from '../components/LogoLoop'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiExpress, SiPhp, SiMysql, SiPostman, SiAstro, SiMui } from 'react-icons/si'

// --- DATOS Y CONFIGURACIÓN ---

const techLogos = [
    { node: <FaHtml5 className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaCss3Alt className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaJs className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaReact className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiAstro className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiTailwindcss className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiMui className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaNodeJs className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiNextdotjs className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiExpress className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiPhp className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiMysql className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <SiPostman className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaFigma className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaGitAlt className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> },
    { node: <FaAws className="text-[#0004ff] w-8 h-8 md:w-14 md:h-14" /> }
]
const TECH_CATEGORIES = [
    {
        title: 'Frontend',
        bgHeader: 'bg-black',
        bgBody: 'bg-[#0004ff]',
        textColor: 'text-white',
        roundedHeader: 'md:rounded-ee-[15px] rounded-ee-[10px]',
        roundedBody: 'md:rounded-se-[15px] rounded-se-[10px]',
        skills: ['Html', 'Javascript', 'Css', 'React', 'React Native', 'Bootstrap', 'Tailwind', 'WordPress']
    },
    {
        title: 'Backend',
        bgHeader: 'bg-black',
        bgBody: 'bg-[#ae00ff]',
        textColor: 'text-white',
        roundedHeader: 'md:rounded-ee-[15px] rounded-ee-[10px] md:rounded-es-[15px] rounded-es-[10px]',
        roundedBody: 'md:rounded-se-[15px] rounded-se-[10px] md:rounded-ss-[15px] rounded-ss-[10px]',
        skills: ['NodeJs', 'AWS', 'NextJs', 'ExpressJs', 'PHP', 'Testing']
    },
    {
        title: 'Databases',
        bgHeader: 'bg-black',
        bgBody: 'bg-[#FF0080]',
        textColor: 'text-white',
        roundedHeader: 'md:rounded-es-[15px] rounded-es-[10px] md:rounded-ee-[15px] rounded-ee-[10px]',
        roundedBody: 'md:rounded-ss-[15px] rounded-ss-[10px] md:rounded-se-[15px] rounded-se-[15px]',
        skills: ['Firebase', 'MongoDB', 'MySQL']
    },
    {
        title: 'Herramientas',
        bgHeader: 'bg-black',
        bgBody: 'bg-[#FFD400]',
        textColor: 'text-black', // Cambiado a negro para mejor contraste con amarillo
        roundedHeader: 'md:rounded-es-[15px] rounded-es-[10px]',
        roundedBody: 'md:rounded-ss-[15px] rounded-ss-[10px]',
        skills: ["IA", 'Postman', 'Figma', 'Git', 'GitHub', "Testing"]
    }
]

// --- VARIANTES DE MOTION ---

const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const itemRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const letterContainerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const letterVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -40 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
}

const imageSweepVariants = {
    hidden: { opacity: 1, y: 150 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}

function Tecnologias() {
    const titleText = "Tecnologías"

    return (
        <div className='h-fit relative px-4 md:px-10 selection:bg-transparent w-full text-mono flex flex-col items-center justify-evenly'>
            <div className='w-full flex flex-col items-center md:flex-row justify-between'>

                {/* Encabezado y Descripción */}
                <div id='tecnologias' className='h-full md:ml-6 border-x border-t p-5 rounded-t-lg'>
                    <motion.h2
                        className='w-full text-2xl lg:text-3xl font-bold flex overflow-hidden'
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={letterContainerVariants}
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span
                                key={`${char}-${index}`}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <p className='text-sm md:text-base leading-5 font-light md:w-[80%] pt-2'>
                        Mi trabajo comienza desde un maquetado en Figma, buscando dar sentido a las ideas creativas, luego voy desarrollando las funcionalidades de las aplicaciones.
                    </p>
                </div>

                {/* Imagen Rueda Animada */}
                <img
                    className='absolute h-18 z-30 lg:h-28 bottom-[40vw] sm:bottom-[34vw] lg:bottom-[32vw] right-10 lg:right-[10vw] animate-[spin_30s_linear_infinite]'
                    src={rueda?.src || rueda}
                    alt="Rueda decorativa"
                />

                {/* Rejilla/Columnas de Tecnologías */}
                <div className='flex flex-col md:flex-row w-full md:justify-center items-center'>
                    <motion.div
                        className='flex z-10 tracking-tight justify-center w-full items-start'
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {TECH_CATEGORIES.map((cat, idx) => (
                            <div key={idx} className={`w-full md:w-fit ${cat.title === 'Backend' || cat.title === 'Databases' || cat.title === 'Herramientas' ? 'flex flex-col' : ''}`}>

                                {/* Header de la categoría */}
                                <motion.div
                                    variants={itemRiseVariants}
                                    className={`${cat.bgHeader} md:p-3 py-1.25 px-1.5 text-xs md:text-lg ${cat.roundedHeader} text-white`}
                                >
                                    <p>{cat.title}</p>
                                </motion.div>

                                {/* Lista de Skills */}
                                <motion.div
                                    variants={itemRiseVariants}
                                    className={`${cat.bgBody} md:p-3 relative z-20 py-1.25 px-1.5 text-sm md:text-lg ${cat.roundedBody} ${cat.textColor}`}
                                >
                                    {cat.skills.map((skill, sIdx) => (
                                        <p key={sIdx}>{skill}</p>
                                    ))}
                                </motion.div>
                            </div>
                        ))}

                        {/* Flecha decorativa */}
                        <motion.img
                            variants={{
                                hidden: { opacity: 0, scale: 0.5 },
                                show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className='absolute h-[50vw] sm:h-[20vw] drop-shadow-md z-20 bottom-[36vw] md:bottom-[30vw] md:rotate-12'
                            src={flecha?.src || flecha}
                            alt="Flecha decorativa"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Galería / Capturas animadas */}
            <motion.div
                className='relative w-full md:pt-10 h-[45vw] md:h-[30vw] flex items-center justify-center selection:bg-transparent z-10'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <motion.img
                    variants={imageSweepVariants}
                    className='absolute h-fit w-[50vw] md:w-[44vw] rounded md:rounded-md shadow-[0px_5px_0_rgba(0,0,250,1)] z-10 md:shadow-[0px_12px_0_rgba(0,0,250,1)]'
                    src={img?.src || img}
                    alt="Captura principal"
                />
                <motion.img
                    variants={imageSweepVariants}
                    className='absolute h-fit w-[40vw] rotate-6 md:rotate-0 opacity-95 md:opacity-90 md:w-[30vw] rounded md:rounded-md -right-2 shadow-[0px_4px_0_rgba(255,0,100,1)] md:shadow-[0px_9px_0_rgba(255,0,100,1)]'
                    src={img2?.src || img2}
                    alt="Captura secundaria derecha"
                />
                <motion.img
                    variants={imageSweepVariants}
                    className='absolute h-fit w-[40vw] -rotate-6 md:rotate-0 opacity-95 md:opacity-90 md:w-[30vw] rounded md:rounded-md -left-2 shadow-[0px_4px_0_rgba(255,0,100,1)] md:shadow-[0px_9px_0_rgba(255,0,100,1)]'
                    src={img3?.src || img3}
                    alt="Captura secundaria izquierda"
                />
            </motion.div>
            <div className="w-full h-20 md:h-40 mt-10 overflow-hidden flex items-center bg-[#f8f9fa] border-y mask-[linear-gradient(to_right,transparent,black,transparent)] border-gray-100">
                <LogoLoop logos={techLogos} speed={40} direction="left" gap={20} className="w-full" />
            </div>
        </div>
    )
}

export default Tecnologias