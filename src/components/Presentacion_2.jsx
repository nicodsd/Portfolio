import React from 'react'
import flechaMid from '../../public/Images/diseño-grafico/300ppi/flecha-dis.svg'

function Presentacion_2() {
    return (
        <div className='min-h-screen flex justify-start items-center'>
            <div className='absolute right-24'>
                <div className='cap w-[37vh] relative -right-10 h-[24vh] hover:scale-110 hover:ease-in-out hover:duration-150 rotate-3 bg-[#a1a1a1]'></div>
                <img className='absolute z-10 rotate-12' src={flechaMid} alt="flecha" />
                <div className='cap w-[30vh] relative right-10 h-[21vh] hover:scale-110 hover:ease-in-out hover:duration-150 z-20 -rotate-3 bg-[#cecece]'></div>
                <div className='cap w-[30vh] relative -right-2 hover:z-30 h-[21vh] hover:scale-110 hover:ease-in-out hover:duration-150 rotate-[10deg] bg-[#cecece]'></div>
            </div>

            <div className='w-[60%] py-16 h-fit text-black texto2 flex flex-col justify-center px-14 z-10'>
                <h2 className='text-2xl font-bold text-mono w-full'>Sobre mi<span className=' animate-pulse-slow'>_</span></h2>
                <h2 className='text-7xl text-mono font-normal text-[#0600ff] h-[85px]'>Primero, <b className='text-[#FF0080] font-black'>hola</b></h2>
                <h3 className='haches text-mono mt-6'>Introducción</h3>
                <p className='paraf-ini'>Soy Nicolas Barrera, me identifico como una persona multifacética e inquieta.
                    De pequeño me llamaba la atención las computadoras y las artes plásticas, tomando un gusto por los graffitis
                    y el arte callejero, subversivo y emergente, reflejándolo en mis dibujos y replicando aquello que me atraía.
                    Durante mi vida experimenté con muchas cosas, entre ellas con la música, conociendo
                    nuevos horizontes y encontrándome en el camino.</p>
                <h3 className='haches text-mono'>Sobre estudios</h3>
                <p className='paraf-ini'>Estudie dos carreras las cuales estaban fuera del rango del arte, hoy por hoy
                    descontinuadas, a pesar de eso pude tener un buen desempeño y siempre focalizándome de tomar de otras
                    disciplinas para expandir mi mirada en la vida en general.</p>
                <h3 className='haches text-mono'>Virando al diseño...</h3>
                <p className='paraf-ini'>Al inicio solo deseaba expresar mis emociones por medio de ilustraciones
                    visuales, dejándome fluir y queriendo transmitir un mensaje de lo que transitaba en esos momentos,
                    a su vez me deje influir por la moda, pendiente a los detalles visuales que para mí eran fascinantes.
                    Es así como fui ganando experiencia y marcando un trayecto en lo que hoy en dia me apasiona como es el área
                    del diseño.
                    De esta manera fui aprendiendo y conociendo las herramientas de diseño de manera autodidacta.</p>
                <p className='paraf-ini '>Teniendo en cuenta esto como referencia para crear mi marca y generar una imagen de dinamismo, en
                    las formas por los cambios y lo multifacético de mi personalidad.</p>
            </div>
        </div>
    )
}

export default Presentacion_2