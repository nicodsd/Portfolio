import React from 'react'
import Card from '../components/Cards'
import imag1 from '../../public/Images/fondos-web-proy/amazing-events.png'
import imag3 from '../../public/Images/fondos-web-proy/minga.png'
import imag4 from '../../public/Images/fondos-web-proy/home-essentials.png'
import imag2 from '../../public/Images/fondos-web-proy/huella-sana.png'

let amazingData = {
    "duración": "2 Semanas",
    "tecnologias": "Javascript, Html, Css",
    "appmovil": "No",
    "diseño": "Nicolas Barrera",
    "dirigido": "MindHub L.A."
}
let homeEsData = {
    "duración": "2 Semanas",
    "tecnologias": "Javascript, Html, Css, TailwindCss, Nodejs, React, ExpressJS, Firebase, MongoDB, Postman",
    "appdiseño": "Figma, Illustrator",
    "appmovil": "si",
    "diseño": "Nicolas Barrera",
    "dirigido": "MindHub L.A."
}
let huellaSanaData = {
    "duración": "1 Semanas",
    "tecnologias": "Javascript, Html, Css, Boostrap",
    "appmovil": "No",
    "diseño": "Nicolas Barrera, entre otros",
    "dirigido": "MindHub L.A."
}
let mingaData = {
    "duración": "3 Semanas",
    "tecnologias": "Javascript, Html, Css, TailwindCss, Nodejs, React, ExpressJS, Firebase, MongoDB, Postman",
    "appmovil": "No",
    "diseño": "Lucas Silva",
    "dirigido": "MindHub L.A."
}

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

    /*Enlaces*/

    let enlAmazingDes = ""
    let enlHuellaDes = ""
    let enlMingaDes = ""
    let enlHomeDes = ""

    return (
        <div className='lg:min-h-screen pt-20 pb-5 lg:h-[68vw] text-mono flex flex-col lg:flex-row lg:items-center w-full px-5 lg:px-14'>
            <div className='lg:w-[35%] mb-10 lg:py-32 h-full'>
                <h2 className='w-full text-2xl lg:text-3xl font-bold mb-2'>Proyectos<span className='animate-pulse-slow'>_</span></h2>
                <p className='text-xs md:text-sm lg:text-sm pt-2 lg:w-[96%] font-[400]'>Proyectos donde se aplicaron las principales tecnologias del desarrollo web complementando conocimientos con diseño y las ultimas tecnologias</p>
            </div>
            <div className='flex w-full items-start mt-6'>
                <div className='flex h-fit justify-start flex-wrap gap-y-4 md:gap-6'>
                    <Card imag={imag1} descripcion={amazingDes} titulo={amazingEvents} enlace={enlAmazingDes}/>
                    <Card imag={imag2} descripcion={huellaDes} titulo={petshop} enlace={enlHuellaDes} />
                    <Card imag={imag3} descripcion={mingaDes} titulo={minga} enlace={enlMingaDes} />
                    <Card imag={imag4} descripcion={homeDes} titulo={home} enlace={enlHomeDes} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos