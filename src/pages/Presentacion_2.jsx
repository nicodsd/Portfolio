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
                const scrollPosition = window.scrollY - 470

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
        <div id='sobreMi' className='min-h-screen selection:bg-transparent pt-16 md:py-14 flex flex-col md:flex-row justify-between items-center gap-y-14 md:gap-y-0'>

            <div className='md:w-[60%] lg:w-[60%] h-full text-mono text-black flex flex-col justify-center px-5 lg:px-14 z-10'>
                <h2 id="titular" className={scrolled ? 'text-[2rem] border-2 border-transparent bg-white duration-500 p-4 w-fit rounded-xl md:text-5xl lg:text-5xl font-normal text-[#0600ff]' : 'text-[2rem] duration-500 p-10 -skew-x-12 rounded-xl w-fit md:text-5xl lg:text-5xl border-2 border-[#6d6d6d] font-normal text-[#0600ff]'}>Primero, <b className='text-[#FF0080] font-black'>hola</b></h2>
                <div>
                    <div className={scrolled ? "animate__animated animate__fadeInBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>Introducción</h3>
                        <p>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                            De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                            y el arte callejero, subversivo y emergente, reflejándolo en mis dibujos y replicando aquello que me atraía.
                            Durante mi vida experimenté con muchas cosas, entre ellas con la música, conociendo
                            nuevos horizontes y encontrándome en el camino.</p>
                    </div>
                    <div className={scrolled ? "animate__animated animate__fadeInBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>Sobre estudios</h3>
                        <p>Estudié dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                            descontinuadas, a pesar de eso pude tener un buen desempeño y siempre focalizándome de tomar de otras
                            disciplinas para expandir mi mirada en la vida en general.</p>
                    </div>

                    <div className={scrolled ? "animate__animated animate__fadeInBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]" : "animate__animated animate__fadeOutBottomLeft text-sm leading-5 text-[#3f3f3f] font-[300]"}>
                        <h3 className='haches'>Virando al diseño...</h3>
                        <p>Al inicio solo deseaba expresar mis emociones por medio de ilustraciones
                            visuales, dejándome fluir y queriendo transmitir un mensaje de lo que transitaba en esos momentos,
                            a su vez me deje influir por la moda, pendiente a los detalles visuales que para mí eran fascinantes.
                            Es así como fui ganando experiencia y marcando un trayecto en lo que hoy en dia me apasiona como es el área
                            del diseño.
                            De esta manera fui aprendiendo y conociendo las herramientas de diseño de manera autodidacta.</p>
                        <p className="py-2">Teniendo en cuenta esto como referencia para crear mi marca y generar una imagen de dinamismo, en
                            las formas por los cambios y lo multifacético de mi personalidad.
                        </p>
                    </div>

                </div>


            <div className='md:w-[60%] lg:w-[46%] h-full text-mono text-black flex flex-col justify-center px-5 lg:px-14 z-10'>
                <h2 className='text-[2rem] md:text-5xl lg:text-5xl xl:text-7xl border-black font-normal text-[#0600ff]'>Primero, <b className='text-[#FF0080] font-black'>hola</b></h2>
                <h3 className='haches'>Introducción</h3>
                <p className='text-sm leading-5 text-[#3f3f3f] font-[300]'>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                    De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                    reflejándolo en mis dibujos y replicando aquello que me atraía.
                    <br />
                    Soy un un tipo curioso y me gusta emprender cosas nuevas.</p>
                <h3 className='haches'>Sobre estudios</h3>
                <p className='text-sm leading-5 text-[#3f3f3f] font-[300]'>Estudié dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                    descontinuadas, cabe recalcar que tuve un buen desempeño y siempre me focalizé en tomar de otras
                    disciplinas para expandir mi mirada en la vida en general.</p>
                <h3 className='haches'>Virando al diseño...</h3>
                <p className='text-sm leading-5 text-[#3f3f3f] font-[300]'>Al principio solo deseaba expresar mis emociones haciendo ilustraciones
                    visuales, dejándome fluir e inconscientemente daba un mensaje de lo que transitaba en esos momentos,
                    a su vez me llama mucho la moda, y muy pendiente a los detalles que para mí son los que marcan una marcada diferencia.</p>
                <p className='text-sm leading-5 py-2 text-[#3f3f3f] font-[300]'>Teniendo en cuenta esto como referencia para crear mi marca y generar una imagen de dinamismo, en
                    las formas por los cambios y lo multifacético de mi personalidad.</p>

            </div>

            <div id="titular" className={scrolled ? 'relative md:right-24 lg:right-32 animate__fadeInBottomRight animate__animated animate__faster ' : ' relative md:right-24 lg:right-32 animate__fadeOutBottomRight animate__animated'}>
                <p className='absolute a-texto lg:visible text-[20rem] md:text-[10rem] lg:text-[18rem] font-bold text-[#ffffff] md:-left-16 -skew-x-[18deg] -left-6 -top-14 md:-top-10'>@</p>
                {img3 && <img src={img3} alt="imagen" className='cap w-[60vw] h-[20vh] md:w-[26vh] drop-shadow-md lg:w-[32vh] object-cover relative -right-14 md:-right-20 md:h-[20vh] lg:h-[25vh] rotate-3 bg-[#a1a1a1]' />}
                <img className='absolute h-[150vw] md:h-[37vh] z-10 rotate-[10deg] md:-rotate-[30deg] top-32 left-0' src={flechaMid} alt="flecha" />
                {img2 && <img src={img2} alt="imagen" className='cap w-[60vw] md:w-[26vh] z-30 drop-shadow-md lg:w-[30vh] object-cover relative right-10 md:right-8 md:h-[24vh] lg:h-[30vh] z-10 -rotate-3 bg-[#cecece]' />}
                {img1 && <img src={img1} alt="imagen" className='cap w-[60vw] md:w-[26vh] z-20 drop-shadow-md lg:w-[30vh] object-cover relative -right-6 md:-right-10 md:h-[20vh] lg:h-[21vh] rotate-[6deg] bg-[#cecece]' />}
            </div>
        </div>
    )
}

export default Presentacion_2