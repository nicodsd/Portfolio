import React, { useState } from 'react';
import arrow from '../../public/Images/diseño-grafico/300ppi/flecha-sitio.svg'
import { Link as Anchor } from 'react-router-dom'

function Cards(props) {

    let { datos } = props
    const pages = datos?.pages || []
    console.log(pages)

    function parriba() {
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
        })
    }

    return (

        <>
            {pages?.length > 0 ? pages?.map((eachData, index) => (
                <div key={index} className='flex flex-col md:max-w-[20rem] lg:max-w-[20rem] duration-100 hover:shadow-[-10px_10px_0_rgba(0,0,0,1)] hover:translate-x-[10px] hover:-translate-y-[10px]'>
                    <Anchor to={"/detalles"} onClick={() => { parriba() }} className='h-fit relative cursor-pointer'>
                        <img className='object-contain w-fit' src={eachData.miniatura} alt={""} />
                    </Anchor>
                    <div className='font-mono flex flex-col p-2 justify-between text-white h-[8rem] bg-[#0600ff]'>
                        <div>
                            <h2 className='font-[600] text-lg lg:text-xl'>{eachData.titulo}</h2>
                            <Anchor onClick={() => { parriba() }}>
                                <p className='text-[10.5px] md:text-xs font-thin text-[#E2E8EE]'>{eachData.descripcion}<span className='font-[900] ml-1 text-white cursor-pointer'>Ver más</span></p>
                            </Anchor>
                        </div>
                        <Anchor to={""} className='w-full flex justify-end items-center cursor-pointer'>
                            <p className='text-xs md:text-[14px] mr-3 font-bold'>Ir al sitio</p>
                            <img className='h-3' src={arrow} alt="Ir al sitio" />
                        </Anchor>
                    </div>
                </div>
            )) : null}
        </>

    )
}

export default Cards