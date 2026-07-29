import React, { memo } from 'react'
import { Link as Anchor } from 'react-router-dom'
import { motion } from 'framer-motion'
import MyLoader from './skeletons/LoaderSkeletonCard'

// Variantes declaradas fuera del componente para evitar ser re-evaluadas en cada render
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

function Cards({ datos }) {
    const pages = datos || []

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!pages.length) {
        return (
            <div className="flex flex-wrap gap-2 w-fit">
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
            </div>
        )
    }

    return (
        <>
            {pages.map((eachData, index) => {
                // Usar un ID único del objeto si existe; de lo contrario, fallback a index/pagina
                const cardKey = eachData?.id || eachData?.pagina || index

                return (
                    <motion.div
                        key={cardKey}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.03 }} // Framer Motion maneja el hover de forma limpia sin colisionar con Tailwind
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true, amount: 0.1 }}
                        style={{ willChange: 'transform, opacity' }} // Aceleración de GPU explícita
                        className="will-change-transform"
                    >
                        <Anchor
                            to={`/detalles/${eachData?.pagina}`}
                            onClick={handleScrollToTop}
                            className="flex bg-white flex-col justify-between group/card border-[1px] hover:z-10 rounded-[1vh] overflow-hidden h-full"
                        >
                            <div className="h-fit relative cursor-pointer overflow-hidden bg-gray-100">
                                <img
                                    className="object-cover w-full h-auto rounded-t-[1vh]"
                                    src={eachData?.miniatura}
                                    alt={eachData?.titulo || 'Miniatura del proyecto'}
                                    loading="lazy" // Carga perezosa para aligerar la CPU/Red
                                    decoding="async"
                                />
                            </div>

                            <div className="font-mono flex md:min-h-[10rem] flex-col p-2 md:p-6 justify-between text-black min-h-[8rem]">
                                <div>
                                    <h2 className="font-bold group-hover/card:text-[#0600ff] leading-none mb-2 md:mb-0 text-[3vh] transition-colors duration-200">
                                        {eachData?.titulo}
                                    </h2>
                                    <p className="leading-[19px] text-xs md:text-sm font-thin line-clamp-2 text-[#8d8d8d] group-hover/card:text-[#363636] transition-colors duration-200 mt-2">
                                        {eachData?.descripcion}
                                    </p>
                                </div>
                            </div>
                        </Anchor>
                    </motion.div>
                )
            })}
        </>
    )
}

export default memo(Cards)