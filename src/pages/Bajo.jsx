import React from 'react'
import logoName from '../../public/Images/logos/logo-negro.svg'
import logoN from '../../public/Images/logos/logo-negro-n.svg'

function Bajo() {
    return (
        <div className='h-screen w-full flex text-mono'>
            <div className='relative text-[#ffffff] '>
                <p className='absolute font-bold text-[33rem] fon bottom-52'>BJ</p>
                <p className='absolute font-bold text-[33rem] top-44 left-52'>N</p>
            </div>
            <div className='flex items-end w-full flex-col z-10 justify-between p-16'>
                <div className='w-full h-fit flex justify-end'>
                    <img className='h-24' src={logoN} alt="" />
                </div>
                <div className='flex items-end w-full justify-between'>
                    <img className='h-16' src={logoName} alt="" />
                    <div className='font-bold text-xl text-end '>
                        <p className='text-[4.5rem] font-thin h-14'>20</p><span className='text-[4.5rem] text-[#ffffff]'>23</span>
                        <p className='h-4'>Nico</p>
                        <p>Barrera</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bajo