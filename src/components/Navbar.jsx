import { useState } from 'react'
import Sidebar from './Sidebar'

function Navbar() {

  const [open, setOpen] = useState(false)

  function sideBar() {
    setOpen(true)
  }
  function close() {
    setOpen(false)
  }

  return (
    <>

      {open ? <Sidebar open={open} close={close} /> : null}
      <nav className="relative w-full text-mono z-10 p-2 md:p-4">
        <div className="w-full text-[#000000] flex justify-between px-1 py-1 lg:px-6 items-center">
          <div onClick={() => sideBar()} className="w-10 visible md:invisible md:absolute h-10 z-10 md:z-0 lg:w-8 flex items-center justify-center lg:h-8 bg-[#000000] rounded-full animate__flash animate__animated animate__delay-1s animate__faster">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25"><mask id="mask0_450_7" width="25" height="25" x="0" y="0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse"><path fill="#d9d9d9" d="M.125.479h24v24h-24z" /></mask><g mask="url(#mask0_450_7)"><path fill="#fff" d="M3.125 18.479v-2h18v2zm0-5v-2h18v2zm0-5v-2h18v2z" /></g></svg>
          </div>

          <div className='flex gap-x-8 w-full justify-between'>
            <div className="w-4 h-4 md:w-8 md:h-8 bg-[#000000] invisible md:visible rounded-full animate__flash animate__animated animate__delay-1s animate__faster"></div>
            <div className='flex'>
              <ul className='flex w-fit lg:gap-x-7 md:gap-2 text-[0px] md:text-xs lg:text-sm absolute md:relative invisible md:visible font-normal items-center'>
                <li className='cursor-pointer'><a href={'/#inicio'}>Inicio</a></li>
                <li className='cursor-pointer'><a href={'/#proyectos'}>Proyectos</a></li>
                <li className='cursor-pointer'><a href={'/#tecnologias'}>Tecnologías</a></li>
                <li className='cursor-pointer'><a href={'/#contacto'}>Contacto</a></li>
                <li className='cursor-default'><p className='border-l-2 text-[#00000077] border-black px-2 lg:px-6'>Diseño Grāfico</p></li>
              </ul>
              <p className="text-xl font-semibold cursor-default md:px-5">
                portafolio
              </p>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar