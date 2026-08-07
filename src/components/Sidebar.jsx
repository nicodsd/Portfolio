import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
    { label: 'Inicio', targetId: null },
    { label: 'Proyectos', targetId: 'proyectos' },
    { label: 'Tecnologías', targetId: 'tecnologias' },
    { label: 'Contacto', targetId: 'contacto' },
]

// Variantes de animación para el contenedor del Sidebar
const sidebarVariants = {
    closed: {
        x: '-100%',
        transition: {
            type: 'tween',
            duration: 0.3,
            when: 'afterChildren',
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    open: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
}

// Variantes de animación para cada elemento de la lista
const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
}

function Sidebar({ open, close }) {

    const handleNavigation = (targetId) => {
        close()

        // Si no es la página principal, navegar primero a '/'
        if (typeof window !== 'undefined' && window.location.pathname !== '/') {
            window.location.href = '/'
            if (targetId) {
                setTimeout(() => scrollToSection(targetId), 100)
            }
        } else if (targetId) {
            scrollToSection(targetId)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-screen bg-[#000000] text-white z-50 p-6 md:p-8 font-mono flex flex-col justify-between"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sidebarVariants}
                >
                    {/* Botón de Cierre */}
                    <button
                        onClick={close}
                        aria-label="Cerrar menú"
                        className="absolute top-4 right-4 text-4xl p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        ✕
                    </button>

                    {/* Lista de Navegación */}
                    <motion.ul className="flex flex-col text-5xl gap-2 font-normal justify-end h-full pb-8">
                        {NAV_ITEMS.map((item, index) => (
                            <motion.li
                                initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 * index }} viewport={{ once: true }} whileHover={{ x: 10 }}
                                className="cursor-pointer transition-transform"
                            >
                                <button
                                    onClick={() => handleNavigation(item.targetId)}
                                    className="text-left w-full focus:outline-none"
                                >
                                    {item.label}
                                </button>
                            </motion.li>
                        ))}

                        <motion.li variants={itemVariants} className="cursor-default pt-4">
                            <p className="opacity-20 text-3xl">Diseño Gráfico</p>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Sidebar