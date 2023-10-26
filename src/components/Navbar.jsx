import { Link as Anchor } from 'react-router-dom'
import { useState } from 'react'

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
      {open == true ? <div onClick={() => close()} className="px-4 py-2 bg-[#ffffff] fixed flex justify-center items-center z-50 rounded-full right-3 top-2">X</div> : null}
      {open ? <div className='w-full fixed h-full bg-black z-40'></div> : null}
      <nav className="relative w-full text-mono z-10 p-2 md:p-0">
        <div className="w-full text-[#000000] flex justify-between lg:px-6 lg:py-[20px] items-center">
          <div onClick={() => sideBar()} className="w-8 visible drop-shadow-lg md:invisible h-8 left-2 absolute lg:w-8 lg:h-8 bg-[#000000] rounded-full animate__flash animate__animated animate__delay-1s animate__faster"></div>

          <div className='flex gap-x-8'>
            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#000000] rounded-full drop-shadow-xl animate__flash animate__animated animate__delay-1s animate__faster"></div>
            <ul className='flex lg:gap-x-7 text-[0px] md:text-base invisible md:visible font-[400] items-center'>
              <li className='cursor-pointer'><Anchor to={'/'} >Inicio</Anchor></li>
              <li className='cursor-pointer'><Anchor onClick={irSobreMi}>Sobre mí</Anchor></li>
              <li className='cursor-pointer'><Anchor onClick={irProyectos}>Proyectos</Anchor></li>
              <li className='cursor-pointer'><Anchor onClick={irTecnologias}>Tecnologias</Anchor></li>
              <li className='cursor-pointer'><Anchor onClick={irContacto}>Contacto</Anchor></li>
              <li className='cursor-default'><p className='border-l-2 text-[#00000077] border-black lg:px-6'>Diseño Grāfico</p></li>
            </ul>
          </div>

          <p className="text-xl font-semibold cursor-default">`portafolio`</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar