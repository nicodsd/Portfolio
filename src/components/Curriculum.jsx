import React from 'react'
import file from '../../public/Images/diseño-grafico/file_save.svg'

function Curriculum() {
    return (
        <div 
        className='flex fixed z-40 justify-center items-center right-[54px] bottom-[115px]'
        onClick={() => {
            
        }}>
            <div className='bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer absolute rounded-[1rem] w-[55px] h-[45px] flex items-center justify-center'>
                <img className='z-10 w-7 absolute animate__animated animate__fadeInUp' src={file} alt='' />
            </div>
        </div>
    )
}

export default Curriculum