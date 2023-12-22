import React, { useEffect, useState } from 'react';

const TuComponente = () => {
  const [scrolled, setScrolled] = useState(false);
    

  useEffect(() => {
    const handleScroll = () => {
      const elemento = document.getElementById('miElemento');

      if (elemento) {
        const elementoPosition = elemento.getBoundingClientRect().bottom;
        const scrollPosition = window.scrollY;

        if (scrollPosition > elementoPosition) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-screen w-full'>
      <h1 className='mb-[40vh]'>Tu Página</h1>
      <div className={scrolled ? 'bg-white text-[2rem] duration-500 p-5 border-2 w-fit rounded-xl md:text-5xl lg:text-5xl border-black font-normal text-[#0600ff]' : 'text-[2rem] duration-150 p-5 border-2 w-fit rounded-xl md:text-5xl lg:text-5xl border-black font-normal text-[#0600ff]'}>Contenido con animación</div>
      <div className='h-[40vh]'>Contenido con ID</div>
      <div className='mt-20' id="miElemento">dsadasdas</div>
      {/* El div de arriba cambiará de clase dependiendo de si el scroll alcanza cierta posición */}
    </div>
  );
};

export default TuComponente;
