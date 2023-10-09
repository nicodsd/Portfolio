import React from 'react'
import logoName from '../../public/Images/logos/logo-negro.svg'
import logoN from '../../public/Images/logos/logo-negro-n.svg'

function Bajo() {
    return (
        <div className='h-[40vw] w-full flex text-mono p-16'>
            
                <div className='flex items-end w-full justify-between'>
                    <img className='h-16' src={logoName} alt="" />
                    <div className='font-bold text-xl text-end '>
                        <p className='text-[4.5rem] font-thin h-14'>2023</p>
                        <p className='h-4'>Nico</p>
                        <p>Barrera</p>
                    </div>
                </div>

        </div>
    )
}

export default Bajo