import React from 'react'

function Mantenimiento() {
    return (
        <div className='flex cursor-default flex-col h-screen w-screen text-mono selection:bg-[#0600ff] selection:text-[#ffffff]'>
            <div className='flex items-start text-4xl sm:text-7xl md:text-9xl font-bold'>
                <p>Página en Mantenimiento</p>
            </div>
            <div className='w-full h-full flex justify-end text-2xl items-end mb-20 md:pr-20'>
                <p className='bg-[#0600ff] p-4 text-[#ffffff]'>Vuelva pronto!</p>
            </div>
        </div>
    )
}

export default Mantenimiento