import React from 'react'
import Card from '../components/Cards'

function Proyectos() {
    return (
        <div className='min-h-screen pt-2 h-fit flex w-full px-14'>
            <div className='min-h-screen w-[30%]'>
                <h2 className='text-2xl font-bold text-mono w-full'>Proyectos<span className=' animate-pulse-slow'>_</span></h2>
            </div>
            <div className='flex flex-wrap gap-10'>

                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </div>
    )
}

export default Proyectos