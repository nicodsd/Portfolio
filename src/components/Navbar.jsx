import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import burger from '../../public/Images/diseño-grafico/menu.svg'

function Navbar() {

  const [open, setOpen] = useState(false)

  function sideBar() {
    setOpen(true)
  }
  function close() {
    setOpen(false)
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function irSobreMi() {
    scrollToSection("sobreMi");
  }

  function irProyectos() {
    scrollToSection("proyectos");
  }

  function irTecnologias() {
    scrollToSection("tecnologias");
  }

  function irContacto() {
    scrollToSection("contacto");
  }

  return (
    <>
      <div className='w-full h-[9rem] blur-[35px] bg-[#ffffff] absolute z-10'></div>
      <div className='w-full h-[12rem] blur-[35px] bg-[#ffffff] absolute z-10'></div>
      {open ? <Sidebar open={open} close={close} /> : null}
      <nav className="relative w-full text-mono z-10 p-2 md:p-0">
        <div className="w-full text-[#000000] flex justify-between px-1 py-[4px] lg:px-6 lg:py-[20px] items-center">
          <div onClick={() => sideBar()} className="w-10 visible md:invisible md:absolute h-10 z-10 md:z-0 lg:w-8 flex items-center justify-center lg:h-8 bg-[#000000] rounded-full animate__flash animate__animated animate__delay-1s animate__faster">
            <img className='w-5' src={burger} alt="icon" />
          </div>

          <div className='flex gap-x-8'>
            <div className="w-4 h-4 md:w-8 md:h-8 bg-[#000000] invisible md:visible rounded-full animate__flash animate__animated animate__delay-1s animate__faster"></div>
            <ul className='flex lg:gap-x-7 md:gap-2 text-[0px] md:text-xs lg:text-base absolute md:relative invisible md:visible font-[400] items-center'>
              <li className='cursor-pointer'><Anchor to={'/'} >Inicio</Anchor></li>
              <li className='cursor-pointer'><Anchor to={'/'} onClick={irSobreMi}>Sobre mí</Anchor></li>
              <li className='cursor-pointer'><Anchor to={'/'} onClick={irProyectos}>Proyectos</Anchor></li>
              <li className='cursor-pointer'><Anchor to={'/'} onClick={irTecnologias}>Tecnologías</Anchor></li>
              <li className='cursor-pointer'><Anchor to={'/'} onClick={irContacto}>Contacto</Anchor></li>
              <li className='cursor-default'><p className='border-l-2 text-[#00000077] border-black px-2 lg:px-6'>Diseño Grāfico</p></li>
            </ul>
          </div>

          <p className="text-xl font-semibold cursor-default">`portafolio`</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar