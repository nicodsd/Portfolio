import { Link as Anchor } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="relative h-20 w-full text-mono">
      <div className="w-full border-b border-[#000000] text-[#0600ff] flex justify-between absolute px-3 py-[7px] items-center">
        <div className="w-8 h-8 bg-[#000000] rounded-full"></div>
        <div className='flex w-[20rem] justify-between font-medium'>
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
        <p className="text-xl font-semibold">`portafolio`</p>
      </div>
    </nav>
  )
}

export default Navbar