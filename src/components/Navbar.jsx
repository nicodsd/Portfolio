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

  function irSobreMi() {
    window.scroll({
      top: 1560,
      left: 100,
      behavior: "smooth",
    })
  }
  function irProyectos() {
    window.scroll({
      top: 2530,
      left: 100,
      behavior: "smooth",
    })
  }
  function irTecnologias() {
    window.scroll({
      top: 4350,
      left: 100,
      behavior: "smooth",
    })
  }
  function irContacto() {
    window.scroll({
      top: 5600,
      left: 100,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div className='w-full h-[9rem] blur-[35px] bg-[#ffffff] absolute'></div>
      <div className='w-full h-[12rem] blur-[35px] bg-[#ffffff] absolute'></div>
      {open == true ? <div onClick={() => close()} className="px-4 py-2 bg-[#ffffff] fixed flex justify-center items-center z-50 rounded-full right-3 top-2">X</div> : null}
      {open ? <div className='w-full fixed h-full bg-black z-40'></div> : null}
      <nav className="relative w-full text-mono z-10 p-2 md:p-0">
        <div className="w-full text-[#000000] flex justify-between lg:px-6 lg:py-[20px] items-center">
          <div onClick={() => sideBar()} className="w-8 visible drop-shadow-lg md:invisible h-8 left-2 absolute lg:w-8 lg:h-8 bg-[#000000] rounded-full"></div>
          <div className='flex lg:gap-x-7 text-[0px] md:text-base invisible md:visible font-[400] items-center'>
            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#000000] rounded-full drop-shadow-xl"></div>
            <Anchor to={"/"}>
              <p className=''>Inicio</p>
            </Anchor>
            <Anchor to={"/"}>
              <p onClick={irSobreMi} className=''>Sobre mí</p>
            </Anchor>
            <Anchor >
              <p onClick={irProyectos} className=''>Proyectos</p>
            </Anchor>
            <Anchor >
              <p onClick={irTecnologias} className=''>Tecnologias</p>
            </Anchor>
            <Anchor >
              <p onClick={irContacto} className=''>Contacto</p>
            </Anchor>
            <Anchor to={""} className='border-l-2 border-black lg:px-6'>
              <p className=''>Diseño Grāfico</p>
            </Anchor>
          </div>
          <p className="text-xl font-semibold cursor-default">`portafolio`</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar