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
        <div id='sobreMi' className='min-h-screen selection:bg-transparent lg:mx-2 xl:mx-14 pt-16 md:py-14'>
            <div className=' flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-y-0'>

            <div className='w-[93%] relative lg:w-[45%] rounded-3xl md:rounded-[3rem] border-[2px] border-[#000000] xl:w-[60%] text-mono text-black flex flex-col justify-center p-10 z-10'>
                <h2 id="titular" className="lg:text-[23rem] text-[7rem] absolute lg:-top-[19rem] -top-[5rem] tracking-tighter font-[500]">Hol@</h2>
                <div className='flex flex-col gap-y-14 pt-16 lg:pt-[10rem]'>
                    <div className=" font-[300]">
                        <h3 className='haches tracking-tighter'>Te cuento</h3>
                        <p className='parrafo'>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                            De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                            reflejándolo en mis dibujos y replicando aquello que me atraía.
                        </p>
                    </div>
                    <div className="font-[300]">
                        <h3 className='haches tracking-tighter'>Me gusta emprender cosas nuevas</h3>
                        <p className='parrafo'>Estudié dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                            descontinuadas, cabe recalcar que tuve un buen desempeño y siempre me focalizé en tomar de otras
                            disciplinas para expandir mi mirada en la vida en general.
                            Finalmente me volqué en el area del desarrollo, realizando con éxito un Bootcamp.
                        </p>
                    </div>

                    <div className=" font-[300]">
                        <h3 className='haches tracking-tighter'>Virando al diseño...</h3>
                        <p className='parrafo'>Al principio solo deseaba expresar mis emociones haciendo ilustraciones
                            visuales, dejándome fluir e inconscientemente daba un mensaje de lo que transitaba en esos momentos,
                            a su vez me llama mucho la moda, y muy pendiente a los detalles que para mí son los que marcan una marcada diferencia.
                            Ahora estoy trabajando en el periódico de provincia, donde realizo trabajos de diseño de publicidades y maquetación de las páginas.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center gap-x-4 h-full relative w-[93%] md:w-fit md:px-0 md:mr-6'>
                <div id="titular" className='z-10 relative bg-black border-2 border-black h-full rounded-[3rem]'>
                    {img3 && <img src={img3} alt="imagen" className='cap w-[80vw] h-[35vh] md:w-[26vh] drop-shadow-md lg:w-[32vh] object-cover relative -right-10 md:right-1 md:h-[20vh] lg:h-[25vh] rotate-3 bg-[#a1a1a1]' />}
                    {img2 && <img src={img2} alt="imagen" className='cap w-[80vw] md:w-[30vh] z-30 drop-shadow-md lg:w-[30vh] object-cover relative lg:right-12 left-2 scale-105 md:right-8 md:h-[24vh] lg:h-[30vh] -rotate-3 bg-[#cecece]' />}
                    {img1 && <img src={img1} alt="imagen" className='cap w-[100vw] md:w-[26vh] z-20 drop-shadow-md lg:w-[30vh] object-cover relative -right-2 md:-right-10 md:h-[20vh] lg:h-[21vh] rotate-[6deg] bg-[#cecece]' />}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Presentacion_2;