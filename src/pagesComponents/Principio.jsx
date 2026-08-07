import React, { useState, useEffect } from 'react';
import Carrousel from '../components/Carrousel';
import { motion } from 'motion/react';

// Imports de assets para garantizar rutas correctas según tu empaquetador
import flecha from '../../public/Images/diseño-grafico/objetos-graficos/arrow2.svg';
import mundo from '../../public/Images/diseño-grafico/iconos/Recurso51.svg';
import burbuja from '../../public/Images/diseño-grafico/iconos/Recurso52.svg';
import { DitheredObject } from '../components/canvasui/DitheredObject';

// 1. Definimos las rutas de las imágenes fuera para evitar re-crear la variable en cada render
const IMAGES = [
    "/Images/diseño-grafico/objetos-graficos/principio-graphic.svg",
    "/Images/diseño-grafico/iconos/Recurso51.svg",
    "/Images/diseño-grafico/logos/logo-negro-n.svg",
];

function Principio() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Intervalo para rotar el índice activo
    useEffect(() => {
        if (!IMAGES || IMAGES.length === 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    if (!IMAGES || IMAGES.length === 0) return null;

    return (
        <>
            <div className='mx-10 md:px-10 pb- md:mx-[4vh] selection:bg-transparent md:cuerpo text-mono z-20'>
                <div className='flex flex-col items-center md:flex-row md:items-end justify-between relative'>

                    {/* Sección Nombre Nico Barrera */}
                    <motion.div
                        className='flex space-grotesk-500 -translate-x-13 md:translate-x-0 -indent-1 md:-indent-4 md:text-[12vw] px-1 pt-52 md:pt-0 md:bg-transparent text-[16vw] flex-col z-40'
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 1 },
                            show: { opacity: 1, transition: { staggerChildren: 0.08 } }
                        }}
                    >
                        <p className='nicoBarrera h-[12vw] md:h-[10vw] flex'>
                            {"Nico".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 100, rotateX: -40 },
                                        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                        <p className='nicoBarrera h-[13vw] md:h-[12vw] flex'>
                            {"Barrera".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 100, rotateX: -40 },
                                        show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>

                    {/* Visualizador 3D interactivo con DitheredObject */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="w-full md:w-[45vw] h-[85vw] md:h-[40vw] absolute md:right-10 z-50 -top-6 md:-top-3"
                    >
                        {/* 3. Le pasamos la imagen activa dinámicamente según el currentIndex */}
                        <DitheredObject
                            key={IMAGES[currentIndex]} // La key fuerza el remonte suave cuando cambia la ruta
                            src={IMAGES[currentIndex]}
                            method="halftone"
                            gridSize={0}
                            pixelSizeRatio={1}
                            environmentIntensity={1}
                            roughness={0}
                            scale={3.5}
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
                            highlight="#FFD440"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                {/* Líneas decorativas */}
                <div className='flex items-start z-50 justify-between w-full'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className='flex mt-8 md:mt-12 w-full md:w-[50%]'
                    >
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} viewport={{ once: true }} className='linea1 h-14 md:h-8 w-[20%]'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} viewport={{ once: true }} className='linea2 h-14 md:h-8 w-[20%]'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} viewport={{ once: true }} className='linea3 h-14 md:h-8 w-[20%]'></motion.div>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className='linea bg-black h-14 md:h-8 w-full z-20'></motion.div>
                    </motion.div>
                </div>

                {/* Sección informativa e iconos */}
                <section className='z-20 relative my-8 grid grid-cols-3 gap-y-10 text-mono'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        viewport={{ once: true }}
                        className='w-full flex flex-col gap-2'
                    >
                        <div className='flex justify-between items-center'>
                            <p className='text-xs md:text-lg text-balance font-light md:w-[30vw]'>Desarrollo Web Full Stack & Diseño Gráfico</p>
                        </div>
                        <div className='flex justify-start gap-2 items-end'>
                            <motion.img whileHover={{ rotate: 15, scale: 1.1 }} className='w-8 md:w-12' src={mundo?.src || mundo} alt="mundo" />
                            <motion.img whileHover={{ scale: 1.1, y: -5 }} className='w-8 md:w-12' src={burbuja?.src || burbuja} alt="burbuja" />
                        </div>
                    </motion.div>

                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        animate={{ y: [-8, 30, -8] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        className='h-16 md:h-25 w-full'
                        src={flecha?.src || flecha}
                        alt="flecha"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        viewport={{ once: true }}
                        className='flex items-end justify-between'
                    >
                        <div className='flex'></div>
                        <div className='text-end z-30 text-xs md:text-base font-medium text-mono md:w-32'>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }} viewport={{ once: true }} whileHover={{ x: 10 }}>UX & UI</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Apps móviles</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Páginas webs</motion.p>
                            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }} viewport={{ once: true }} whileHover={{ x: 10 }}>Diseño Gráfico</motion.p>
                        </div>
                    </motion.div>
                </section>
            </div>
            <Carrousel />
        </>
    );
}

export default Principio;