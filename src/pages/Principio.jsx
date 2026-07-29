import Carrousel from '../components/Carrousel'
import { motion } from 'motion/react'
import flecha from '../../public/Images/diseño-grafico/objetos-graficos/arrow2.svg'
import mundo from '../../public/Images/diseño-grafico/iconos/Recurso51.svg'
import burbuja from '../../public/Images/diseño-grafico/iconos/Recurso52.svg'
import { DitheredObject } from '../components/canvasui/DitheredObject'

function Principio() {
    return (
        <>
            <div className='mt-4 mx-10 md:px-10 md:mx-[10vh] selection:bg-transparent md:cuerpo text-mono z-20'>

                <div className='flex flex-col items-center md:flex-row md:items-end justify-between relative'>
                    <motion.div
                        className='flex -translate-x-10 md:translate-x-0 md:-indent-2 md:text-[10vw] px-1 pt-52 md:pt-0 md:bg-transparent text-[16vw] flex-col font-[700] z-40'
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 1 },
                            show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                        }}
                    >
                        <p className='nicoBarrera nico h-[12vw] md:h-[7.6vw] flex'>
                            {"Nico".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{ hidden: { opacity: 0, y: 100, rotateX: -40 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                        <p className='nicoBarrera h-[14vw] md:h-[12vw] flex'>
                            {"Barrera".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{ hidden: { opacity: 0, y: 100, rotateX: -40 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="z-0 w-full md:w-[45vw] h-[85vw] md:h-[40vw] absolute md:right-1 -top-10 md:-top-3"
                    >
                        <DitheredObject
                            src="/Images/diseño-grafico/objetos-graficos/principio-graphic.svg"
                            method="halftone"
                            gridSize={1.3}
                            pixelSizeRatio={2}
                            environmentIntensity={1.2}
                            roughness={0}
                            scale={4}
                            xOffset={0}
                            yOffset={0}
                            floatIntensity={0}
                            rotationIntensity={1}
                            floatSpeed={0}
                            fov={50}
                            cameraDistance={5}
                            grayscale={false}
                            invert={false}
                            dither={true}
                            autoRotate={true}
                            zoom={false}
                            highlight="#FF0080"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                <div className='flex items-start z-20 justify-between w-full'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className='flex mt-8 md:mt-12 w-full md:w-[50%]'>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} viewport={{ once: true }} className='linea1 h-2 md:h-8 w-[20%] rounded-l-full'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} viewport={{ once: true }} className='linea2 h-2 md:h-8 w-[20%]'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} viewport={{ once: true }} className='linea3 h-2 md:h-8 w-[20%]'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className='linea bg-black h-2 md:h-8 w-[100%] z-20 rounded-r-full'></motion.div>
                    </motion.div>
                </div>

                <section className='flex z-20 relative my-8 md:my-20 flex-col md:flex-row gap-y-10 md:gap-0 md:justify-between text-mono'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        viewport={{ once: true }}
                        className='w-full md:w-[50%] flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs md:text-sm w-[80%] font-[300] md:w-[30vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-[#0600ff] md:border-transparent hover:border-[#0600ff]'>En un mundo cambiante, sos el responsable de participar en el cambio.</p>
                            <motion.img whileHover={{ rotate: 15, scale: 1.1 }} className='w-8 md:w-12' src={mundo} alt="mundo" />
                        </div>
                        <div className='flex justify-between items-end'>
                            <p className='text-xs md:text-sm w-[80%] font-[300] md:w-[30vw] hover:border-b-[1px] hover:duration-200 border-b-[1px] border-[#0600ff] md:border-transparent hover:border-[#0600ff]'>La vida es demasiada corta para quedarse adentro de una burbuja.</p>
                            <motion.img whileHover={{ scale: 1.1, y: -5 }} className='w-8 md:w-12' src={burbuja} alt="burbuja" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        viewport={{ once: true }}
                        className='flex items-end md:w-[48%] justify-between'>
                        <div className='flex'>
                            <motion.img
                                animate={{ y: [-10, 20, -10] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className='h-16 md:h-[100px]'
                                src={flecha}
                                alt="flecha"
                            />
                        </div>
                        <div className='text-end z-30 text-xs md:text-sm font-[500] text-mono md:w-32'>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }} viewport={{ once: true }} whileHover={{ x: 10 }}>UX & UI</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Apps móviles</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Páginas webs</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Diseño Grāfico</motion.p>
                        </div>
                    </motion.div>
                </section>
            </div>
            <Carrousel />
        </>
    )
}

export default Principio