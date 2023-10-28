import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <div className='relative flex text-mono h-screen w-full flex-col items-center justify-center z-10'>
        <h1 className='text-7xl font-bold'>404</h1>
        <h2 className='text-4xl font-bold mb-6'>Error</h2>
        <Link to={'/'} className='text-lg py-3 px-8 text-white hover:opacity-90 bg-black rounded-full'>Volver al Inicio</Link>
      </div>
    </>
  )
}

export default ErrorPage