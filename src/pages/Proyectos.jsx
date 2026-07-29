import Cards from '../components/Cards'
import { motion } from "motion/react"
import { cardsPages } from '../data/cardsPages'

function Proyectos() {

    const datos = cardsPages

    return (
        <div className='pt-24 pb-5 selection:bg-transparent text-mono flex flex-col md:items-start w-full lg:pb-14'>
            <motion.div
                id='proyectos'
                className='h-full md:ml-6 border-x border-t mb-12 md:mb-0 p-5 rounded-t-lg'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2
                    className='w-full text-2xl lg:text-4xl font-bold mb-2 flex'
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                >
                    {"Proyectos".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 60, rotateX: -40 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>
                <p className='text-sm md:text-base leading-5 pt-2 w-full lg:w-[50%] parrafo font-[300]'>Combinando diseño y desarrollo, he creado una serie de proyectos que reflejan mi pasión por la tecnología y mi compromiso con la excelencia.</p>
            </motion.div>
            <div className='w-full h-fit flex justify-center items-center'>
                <div className='w-[95%] sm:w-[85%] md:w-[55%] lg:w-[45%] flex flex-col gap-y-8 md:gap-y-12'>
                    <Cards datos={datos} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos