import React from 'react'
import flechaMid from '../../public/Images/diseño-grafico/300ppi/flecha-dis.svg'
import img1 from '../../public/Images/contenido/calaka.webp'
import img2 from '../../public/Images/contenido/nico.webp'
import img3 from '../../public/Images/contenido/nico2.jpg'

function Presentacion_2() {
    return (
        <div id='sobreMi' className='min-h-screen selection:bg-transparent lg:h-[60vw] flex flex-col md:flex-row justify-between items-center'>

            <div className='md:w-[60%] lg:w-[60%] py-16 h-fit text-mono text-black texto2 flex flex-col justify-center px-5 lg:px-14 z-10'>
                <h2 className='w-full text-2xl lg:text-3xl font-bold'>Sobre mi<span className=' animate-pulse-slow'>_</span></h2>
                <h2 className='text-3xl md:text-5xl lg:text-7xl border-black font-normal text-[#0600ff] md:h-[85px]'>Primero, <b className='text-[#FF0080] font-black'>hola</b></h2>
                <h3 className='haches'>Introducción</h3>
                <p className='text-[11px] md:text-sm text-black font-[400]'>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                    De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                    y el arte callejero, subversivo y emergente, reflejándolo en mis dibujos y replicando aquello que me atraía.
                    Durante mi vida experimenté con muchas cosas, entre ellas con la música, conociendo
                    nuevos horizontes y encontrándome en el camino.</p>
                <h3 className='haches'>Sobre estudios</h3>
                <p className='text-[11px] md:text-sm text-black font-[400]'>Estudié dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                    descontinuadas, a pesar de eso pude tener un buen desempeño y siempre focalizándome de tomar de otras
                    disciplinas para expandir mi mirada en la vida en general.</p>
                <h3 className='haches'>Virando al diseño...</h3>
                <p className='text-[11px] md:text-sm text-black font-[400]'>Al inicio solo deseaba expresar mis emociones por medio de ilustraciones
                    visuales, dejándome fluir y queriendo transmitir un mensaje de lo que transitaba en esos momentos,
                    a su vez me deje influir por la moda, pendiente a los detalles visuales que para mí eran fascinantes.
                    Es así como fui ganando experiencia y marcando un trayecto en lo que hoy en dia me apasiona como es el área
                    del diseño.
                    De esta manera fui aprendiendo y conociendo las herramientas de diseño de manera autodidacta.</p>
                <p className='text-[11px] md:text-sm py-2 text-black font-[400]'>Teniendo en cuenta esto como referencia para crear mi marca y generar una imagen de dinamismo, en
                    las formas por los cambios y lo multifacético de mi personalidad.</p>
            </div>
            <div className='relative md:right-24 lg:right-32'>
                <p className='absolute lg:visible text-[20rem] md:text-[10rem] lg:text-[15rem] font-bold text-[#ffffff] md:-left-10 -left-20 -top-20'>@</p>
                <img src={img3} alt="imagen" className='cap drop-shadow-md w-[60vw] md:w-[26vh] lg:w-[32vh] object-cover relative -right-14 md:-right-20 md:h-[20vh] lg:h-[25vh] rotate-3 bg-[#a1a1a1]' />
                <img className='absolute h-[150vw] md:h-[37vh] z-10 rotate-[10deg] md:-rotate-[30deg] top-32 left-0' src={flechaMid} alt="flecha" />
                <img src={img2} alt="imagen" className='cap drop-shadow-md w-[60vw] md:w-[26vh] lg:w-[30vh] object-cover relative right-10 md:right-8 md:h-[24vh] lg:h-[30vh] z-20 -rotate-3 bg-[#cecece]' />
                <img src={img1} alt="imagen" className='cap drop-shadow-md w-[64vw] md:w-[26vh] lg:w-[30vh] object-cover relative -right-6 md:-right-10 md:h-[20vh] lg:h-[21vh] rotate-[6deg] bg-[#cecece]' />
            </div>
        </div>
    )
}

export default Presentacion_2