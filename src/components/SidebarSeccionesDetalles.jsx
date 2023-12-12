import React from 'react'

function SidebarSeccionesDetalles(props) { 
  const { informacion, openSecciones } = props
  const fotos = informacion?.fotos

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function irSeccion(id) {
    scrollToSection(`${id}`);
    openSecciones()
  }

  return (
    <>
      <div className='fixed max-w-[42vh] w-[42vh] animate__animated animate__faster animate__fadeInRight right-0 shadow-lg border-[1px] bg-white md:max-w-0 md:invisible visible md:z-0 z-40 px-4 top-6 py-3 max-h-screen rounded-lg'>
        <p onClick={openSecciones} className='absolute md:invisible right-2 font-semibold py-1 px-3 top-2 z-50'>X</p>
        <h2 style={{ color: informacion.color }} className='font-bold text-lg mb-2'>Secciones</h2>
        <div className='flex gap-y-2 flex-col'>
          {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
            <h2 onClick={() => { irSeccion(eachInfo.titulo) }} className=" hover:scale-[1.03] hover:translate-x-1 text-[16px] cursor-pointer" key={index}> <span style={{ color: informacion.color }}>#</span> {eachInfo.titulo}</h2>
          ))
            :
            null
          }
        </div>
      </div>
    </>
  )
}

export default SidebarSeccionesDetalles