import React from 'react'
import Imag from '../../public/Images/fondos-web-proy/image.png'

function Cards() {
    return (
        <div className='hover:opacity-80 h-[23.5rem] w-[26rem] flex flex-col justify-between'>
            <img className='w-full h-[15rem] object-cover' src={Imag} alt="" />
            <div className='text-mono flex flex-col gap-y-1'>
                <h3 className='font-bold text-xl'>Titulo descriptivo</h3>
                <p className='font-light'>dasdsad asdas as a dsadasds s ddsada dd a sda sadasd asdassa sdsd as</p>
                <div className='mt-2 font-medium'>
                    <p>Ir al sitio</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cards