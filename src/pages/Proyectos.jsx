import React from 'react'
import Card from '../components/Cards'
import imag1 from '../../public/Images/fondos-web-proy/amazing-events.png'
import imag3 from '../../public/Images/fondos-web-proy/minga.png'
import imag4 from '../../public/Images/fondos-web-proy/home-essentials.png'
import imag2 from '../../public/Images/fondos-web-proy/huella-sana.png'

function Proyectos() {

    let amazingEvents = "Amazing Events"
    let petshop = "Huella Sana"
    let minga = "Minga"
    let home = "Home Essentials"

    /*Descripciones*/

    const amazingDes = "Página web donde se publican eventos de diferentes tipos, divididos en categorias."
    const huellaDes = "Tienda online de articulos para mascotas, con un catalogo de productos de veterinaria y juegueteria."
    const mingaDes = "Aplicación web para los amantes de los mangas, donde pasaras horas de entretenimiento de la cultura nipona."
    const homeDes = "E-commerce de productos para el hogar con un diseño vanguardista y moderno, con un largo catalogo de productos en varias categorias, con carrito y creación de usarios."

    return (
        <div className='min-h-screen text-mono h-[62vw] flex w-full px-14'>
            <div className='w-[30%]'>
                <h2 className='text-2xl font-bold w-full mb-6'>Proyectos<span className='animate-pulse-slow'>_</span></h2>
                <p className='text-sm pt-2 w-[90%] font-[300]'>Proyectos donde se aplicaron las principales tecnologias del desarrollo web complementando conocimientos con diseño y las ultimas tecnologias</p>
            </div>
            <div className='flex w-full h-full items-start '>
                <div className='flex h-fit justify-center flex-wrap gap-6'>
                    <Card imag={imag1} descripcion={amazingDes} titulo={amazingEvents} />
                    <Card imag={imag2} descripcion={huellaDes} titulo={petshop} />
                    <Card imag={imag3} descripcion={mingaDes} titulo={minga} />
                    <Card imag={imag4} descripcion={homeDes} titulo={home} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos