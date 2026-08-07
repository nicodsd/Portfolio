import { motion } from 'motion/react'

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

// Subcomponente individual para mejor legibilidad y rendimiento
function CardItem({ project }) {
    const { pagina, miniatura, titulo, descripcion } = project

    return (
        <motion.div
            variants={cardVariants}
            className="w-full transition-shadow duration-200 border hover:shadow-xl rounded-lg overflow-hidden"
        >
            <a
                href={`/detalles/${pagina}`}
                className="flex bg-white flex-col justify-start hover:z-10 h-full group"
            >
                <div className="relative cursor-pointer overflow-hidden md:h-80">
                    <img
                        className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                        src={miniatura}
                        alt={titulo || 'Miniatura del proyecto'}
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <div className="flex flex-col p-4 md:p-5 justify-between flex-1">
                    <div>
                        <h3 className="font-bold leading-tight mb-2 text-xl md:text-2xl transition-colors duration-200">
                            {titulo}
                        </h3>
                        <p className="text-xs md:text-sm font-light line-clamp-2 text-neutral-500 mt-2">
                            {descripcion}
                        </p>
                    </div>
                </div>
            </a>
        </motion.div>
    )
}

export default function Cards({ datos = [] }) {
    if (!datos.length) return null

    return (
        <>
            {datos.map((project) => (
                <CardItem key={project.id || project.pagina} project={project} />
            ))}
        </>
    )
}