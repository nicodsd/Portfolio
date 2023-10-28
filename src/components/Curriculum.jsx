import { useState } from 'react'
import icon from '../../public/Images/diseño-grafico/file_save.svg'
import icon2 from '../../public/Images/diseño-grafico/progress_activity.svg'
import pdf from '../../public/Images/contenido/PDF/Curriculum_Vitae_Barrera_Julio_Nicolas.pdf'

function Curriculum() {

    const [descarga, setDes] = useState(false)

    const descargar = () => {
        setDes(true)
        espera()
    }

    const espera = () => {
        const tiempoDeEspera = 1000;

        const timer = setTimeout(() => {
            setDes(false)
        }, tiempoDeEspera)

    }

    return (
        <a
            href={pdf}
            onClick={descargar}
            download="Curriculum Vitae - Barrera Julio Nicolas"
            className='flex fixed z-40 justify-center items-center right-[53px] bottom-[123px]'>
            <div className='bg-[#0600ff] hover:opacity-80 text-white text-mono drop-shadow-md selection:bg-transparent cursor-pointer absolute rounded-[1rem] min-w-[55px] min-h-[45px] py-2 w-fit h-fit flex items-center justify-center'>
                {descarga === false ? (
                    <div className='flex flex-col items-center'>
                        <p className='animate__animated animate__fadeInUp'>CV</p>
                        <img className='w-6 animate__animated animate__fadeInUp' src={icon} alt='descargar curriculum' />
                    </div>
                ) : (
                    <img className='w-9 absolute animate-spin-speed animate__animated animate__rotateOut' src={icon2} alt='cargando' />
                )
                }
            </div>
        </a>
    )
}

export default Curriculum