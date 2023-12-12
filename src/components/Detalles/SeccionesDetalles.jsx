import React from 'react'

function SeccionesDetalles(props) {

    const { informacion } = props
    const fotos = informacion?.fotos

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    function irSeccion(id) {
        scrollToSection(`${id}`);
    }
   
    return (
        <>
            <div className=' md:w-[16vw] overflow-y-auto bg-white absolute md:relative w-0 invisible md:visible z-0 md:z-20 p-2 md:pt-3 lg:pt-6 min-h-screen rounded-lg'>
                <h2 style={{ color: informacion.color }} className='font-bold mb-2'>Secciones</h2>
                <div className='flex gap-y-3 flex-col'>
                    {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                        <h2 onClick={() => { irSeccion(eachInfo.titulo) }} className=" hover:scale-[1.03] hover:translate-x-1 text-xs cursor-pointer" key={index}> <span style={{ color: informacion.color }}>#</span> {eachInfo.titulo}</h2>
                    ))
                        :
                        null
                    }
                </div>
            </div>
        </>
    )
}

export default SeccionesDetalles