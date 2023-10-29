import React from 'react'
import { Link as Anchor } from 'react-router-dom'

function Sidebar(props) {

    const { open, close } = props

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function irInicio() {
        close()
    }
    
    function irSobreMi() {
        scrollToSection("sobreMi");
        close()
    }
    
    function irProyectos() {
        scrollToSection("proyectos");
        close()
    }
    
    function irTecnologias() {
        scrollToSection("tecnologias");
        close()
    }
    
    function irContacto() {
        scrollToSection("contacto");
        close()
    }

    return (
        <div>
            {open == true ?
                <div className="fixed bg-[#0600ff] text-white w-full h-screen text-mono z-50 p-2 md:p-0 animate__animated animate__faster animate__fadeInLeft">
                    <div onClick={() => close()} className="px-3 py-2 text-2xl fixed flex justify-center items-center z-50 rounded-full right-3 top-2">X</div>
                    <ul className='flex flex-col text-2xl gap-1 pl-2 font-[400] justify-end h-full'>
                        <li className='cursor-pointer'><Anchor to={'/'} onClick={irInicio}>Inicio</Anchor></li>
                        <li className='cursor-pointer'><Anchor to={'/'} onClick={irSobreMi}>Sobre mí</Anchor></li>
                        <li className='cursor-pointer'><Anchor to={'/'} onClick={irProyectos}>Proyectos</Anchor></li>
                        <li className='cursor-pointer'><Anchor to={'/'} onClick={irTecnologias}>Tecnologías</Anchor></li>
                        <li className='cursor-pointer'><Anchor to={'/'} onClick={irContacto}>Contacto</Anchor></li>
                        <li className='cursor-default'><p className=' opacity-20 '>Diseño Grāfico</p></li>
                    </ul>
                </div>
                : null}
        </div>
    )
}

export default Sidebar