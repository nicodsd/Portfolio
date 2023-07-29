import { Link as Anchor } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="relative h-20 w-full">
      <div className='bg-[#0600ff] h-2 w-full'></div>
      <div className="w-full flex justify-between absolute px-6 py-4 items-center">
        <div className="w-10 h-10 bg-black rounded-full"></div>
        <div className='flex w-[20%] justify-between font-medium'>
          <Anchor>
            <p>Diseño</p>
          </Anchor>
          <Anchor>
            <p>Trabajos</p>
          </Anchor>
          <Anchor>
            <p>Variados</p>
          </Anchor>
        </div>
        <p className="text-black text-lg">`portfolio`</p>
      </div>
    </nav>
  )
}

export default Navbar