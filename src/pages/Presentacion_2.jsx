import React, { useEffect, useState } from 'react'
import flechaMid from '../../public/Images/diseño-grafico/objetos-graficos/flecha-dis.svg'
import img1 from '../../public/Images/contenido/calaka.webp'
import img2 from '../../public/Images/contenido/nico.webp'
import img3 from '../../public/Images/contenido/nico2.jpg'

function Presentacion_2() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const elemento = document.getElementById('titular');

            if (elemento) {
                const elementoPosition = elemento.getBoundingClientRect().bottom;
                const scrollPosition = window.scrollY

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
        <div id='sobreMi' className='min-h-screen selection:bg-transparent pt-16 md:py-14 flex flex-col md:flex-row justify-between items-center gap-y-14 lg:mx-2 xl:mx-14 md:gap-y-0'>
            <div className='md:w-[60%] lg:w-[45%] rounded-2xl border-[2px] shadow-xl border-[#000000] xl:w-[55%] mx-2 h-full text-mono text-black flex flex-col justify-center px-4 lg:px-10 pb-8 z-10'>
                <h2 id="titular" className={scrolled ? 'text-[2rem] border-2 border-[#000000] shadow-xl -translate-y-8 -translate-x-2 bg-[#E2E8EE] duration-700 p-4 w-fit rounded-xl md:text-5xl lg:text-5xl font-normal text-[#0600ff]' : 'text-[2rem] duration-700 p-4 bg-[#E2E8EE] rounded-xl w-fit md:text-5xl lg:text-5xl border-[1px] border-[#6d6d6d] font-normal text-[#0600ff]'}>Primero, <b className='text-[#FF0080] font-black'>hola</b></h2>
                <div className='flex flex-col gap-y-7'>
                    <div className={scrolled ? "animate__animated animate__fadeInUp text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>- Te Cuento</h3>
                        <p className='parrafo'>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                            De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                            reflejándolo en mis dibujos y replicando aquello que me atraía.
                        </p>
                    </div>
                    <div className={scrolled ? "animate__animated animate__fadeInUp text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>- Me gusta emprender cosas nuevas</h3>
                        <p className='parrafo'>Estudié dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                            descontinuadas, cabe recalcar que tuve un buen desempeño y siempre me focalizé en tomar de otras
                            disciplinas para expandir mi mirada en la vida en general.
                            Finalmente me volqué en el area del desarrollo, realizando con éxito un Bootcamp, y pronto por comenzar una
                            tecnicatura en desarrollo<b className='font-[500]'> Full Stack JAVA.</b>
                        </p>
                    </div>

                    <div className={scrolled ? "animate__animated animate__fadeInUp text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>- Virando al diseño...</h3>
                        <p className='parrafo'>Al principio solo deseaba expresar mis emociones haciendo ilustraciones
                            visuales, dejándome fluir e inconscientemente daba un mensaje de lo que transitaba en esos momentos,
                            a su vez me llama mucho la moda, y muy pendiente a los detalles que para mí son los que marcan una marcada diferencia.</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-between items-center gap-x-4 h-full relative px-5 md:px-0'>
                <div className='h-[40vh] rounded-full relative w-12 border-2 shadow-xl border-black'></div>
                <div className='h-[30vh] rounded-full relative w-8 border-2 shadow-xl border-black'></div>
                <div id="titular" className={scrolled ? 'mt-10 md:mt-0 z-10 shadow-xl relative border-2 border-black rounded-[10vh] animate__fadeInUp animate__animated animate__faster ' : ' relative md:right-24 lg:right-32 animate__fadeOutBottomRight animate__animated'}>
                    {img3 && <img src={img3} alt="imagen" className='cap w-[75vw] h-[20vh] md:w-[26vh] drop-shadow-md lg:w-[32vh] object-cover relative -right-14 md:-right-20 md:h-[20vh] lg:h-[25vh] rotate-3 bg-[#a1a1a1]' />}
                    <img className='absolute h-[150vw] md:h-[35vh] z-10 rotate-[10deg] md:-rotate-[36deg] -top-16 lg:top-44 left-0' src={flechaMid} alt="flecha" />
                    {img2 && <img src={img2} alt="imagen" className='cap w-[90vw] md:w-[30vh] z-30 drop-shadow-md lg:w-[30vh] object-cover relative right-12 scale-105 md:right-8 md:h-[24vh] lg:h-[30vh] -rotate-3 bg-[#cecece]' />}
                    {img1 && <img src={img1} alt="imagen" className='cap w-[100vw] md:w-[26vh] z-20 drop-shadow-md lg:w-[30vh] object-cover relative -right-8 md:-right-10 md:h-[20vh] lg:h-[21vh] rotate-[6deg] bg-[#cecece]' />}
                </div>
                <div className='h-52 w-20 relative rounded-full z-0 border-2 shadow-xl border-black'></div>
            </div>
        </div>
    )
}

export default Presentacion_2;