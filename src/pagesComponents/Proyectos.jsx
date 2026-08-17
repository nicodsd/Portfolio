import Cards from '../components/Cards'
import { motion } from 'motion/react'
import { cardsPages } from '../data/cardsPages'
// Variantes reutilizables para animaciones limpias
const titleContainerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const letterVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -40 },
    show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
}

export default function Proyectos() {
    const titulo = "Proyectos"

    return (
        <section className="pt-24 pb-5 px-4 md:px-10 bg-linear-to-b from-[#FFD400] via-white to-[#ffffff] selection:bg-transparent text-mono flex flex-col md:items-start w-full lg:pb-14">
            <div
                id="proyectos"
                className="h-full seccion md:ml-6 border-x border-t md:mb-4 p-5 rounded-t-lg"
            >
                <motion.h2
                    className="w-full text-2xl lg:text-4xl font-bold mb-2 flex flex-wrap"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={titleContainerVariants}
                >
                    {titulo.split("").map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>
                <p className="text-sm md:text-base leading-relaxed pt-2 w-full lg:w-1/2 font-light">
                    Combinando diseño y desarrollo, he creado una serie de proyectos que reflejan mi pasión por la tecnología y mi compromiso con la excelencia.
                </p>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 seccion-2 sm:grid-cols-2 gap-4 w-full md:px-0">
                    <Cards datos={cardsPages} />
                </div>
            </div>
        </section>
    )
}