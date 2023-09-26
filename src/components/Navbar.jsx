import { Link as Anchor } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="relative w-full text-mono z-10">
      <div className="w-full bg-[#ffffff00] text-[#000000] flex justify-between px-6 py-[20px] items-center">
        <div className='flex w-[35%] justify-between font-[200] items-center'>
          <div className="w-8 h-8 bg-[#000000] rounded-full mr-3"></div>
          <Anchor>
            <p className='text-sm'>Inicio</p>
          </Anchor>
          <Anchor>
            <p className='text-sm'>Diseño Grāfico</p>
          </Anchor>
          <Anchor>
            <p className='text-sm'>Trabajos</p>
          </Anchor>
          <Anchor>
            <p className='text-sm'>Contacto</p>
          </Anchor>
        </div>
        <p className="text-xl font-semibold">`portafolio`</p>
      </div>
    </nav>
  )
}

export default Navbar