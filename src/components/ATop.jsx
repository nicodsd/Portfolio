import React, { useState, useEffect } from 'react';
import arr from '../../public/Images/diseño-grafico/iconos/FlechaUp.svg';

function ATop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            // Verifica la posición actual del scroll
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // 1. Ejecutamos la función al montar para saber el scroll inicial (al recargar o navegar)
        toggleVisibility();

        // 2. Escuchamos los eventos de scroll
        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver arriba"
            /* Usamos la clase de visibilidad mediante Tailwind/CSS en lugar de ocultarlo con un `if (!isVisible) return null` 
               para evitar problemas de re-renderizado brusco o pérdida del listener */
            className={`flex fixed z-40 justify-center items-center right-6 bottom-10 bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer rounded-2xl w-14 h-11 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
                }`}
        >
            <img
                className="z-10 w-5 relative pointer-events-none"
                src={arr?.src || arr}
                alt="flecha para arriba"
            />
        </button>
    );
}

export default ATop;