import { Link as Anchor } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="relative h-20 w-full">
      <div className="w-full bg-[#0600ff] text-white flex justify-between absolute px-4 py-2 items-center">
        <div className="w-10 h-10 bg-white rounded-full"></div>
        <div className='flex w-[20%] justify-between font-medium'>
          <Anchor>
            <p>Inicio</p>
          </Anchor>
          <Anchor>
            <p>Diseño Grāfico</p>
          </Anchor>
          <Anchor>
            <p>Trabajos</p>
          </Anchor>
        </div>
        <p className="text-xl">`portafolio`</p>
      </div>
    </nav>
  )
}

export default Navbar