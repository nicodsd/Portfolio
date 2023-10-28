import React from 'react'
import icon from '../../public/Images/diseño-grafico/file_save.svg'
import pdf from '../../public/Images/contenido/PDF/Curriculum_Vitae_Barrera_Julio_Nicolas.pdf'

function Curriculum() {
    return (
        <a
            href={pdf}
            download="Curriculum Vitae - Barrera Julio Nicolas"
            className='flex fixed z-40 justify-center items-center right-[54px] bottom-[115px]'>
            <div className='bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer absolute rounded-[1rem] w-[55px] h-[45px] flex items-center justify-center'>
                <img className='z-10 w-7 absolute animate__animated animate__fadeInUp' src={icon} alt='' />
            </div>
        </a>
    )
}

export default Curriculum