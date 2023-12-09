import React from 'react'

function SeccionesDetalles(props) {

    const { informacion } = props
    console.log(informacion)

    return (
        <>
            <div style={{ backgroundColor: informacion.color }} className='w-[25%] min-h-screen z-10 rounded-lg'>

            </div>
        </>
    )
}

export default SeccionesDetalles