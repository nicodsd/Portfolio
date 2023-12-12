import React, { useStaten, useRef } from 'react';
import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio.svg'
import { Link as Anchor } from 'react-router-dom'
import MyLoader from './skeletons/LoaderSkeletonCard';
import gitIcon from '../../public/Images/diseño-grafico/iconos/github2.svg'

function Cards(props) {

    let { datos } = props
    const pages = datos?.pages || []

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
                <div key={index} className='flex flex-col md:max-w-[20rem] group/card lg:max-w-[16rem] border-[1px] hover:z-10 hover:border-[#1b1b1b] hover:shadow-[-10px_10px_0_rgba(0,0,0,0.1)] duration-75 hover:translate-x-[10px] hover:-translate-y-[10px] bg-[#ffffff] rounded-ee-[1vh] rounded-[1vh]'>
                    <Anchor to={`/detalles/${eachData?.pagina}`} onClick={() => { parriba() }} className='h-fit relative cursor-pointer'>
                        <img className='object-contain w-fit rounded-t-[1vh]' src={eachData?.miniatura} alt={eachData?.titulo} />
                    </Anchor>
                    <div className='font-mono flex flex-col p-2 justify-between text-black min-h-[8rem]'>
                        <div>
                            <h2 className='font-bold text-[#8d8d8d] group-hover/card:text-[#0600ff] text-[3vh]'>{eachData?.titulo}</h2>
                            <Anchor to={`/detalles/${eachData?.pagina}`} onClick={() => { parriba() }}>
                                <p className='leading-[19px] text-xs font-thin text-[#8d8d8d] group-hover/card:text-[#363636]'>{eachData?.descripcion.length > 50 ? (eachData?.descripcion.slice(0, 69) + '...  ') : (eachData?.descripcion)}<span className='font-[900] ml-1 text-black cursor-pointer'>Ver más</span></p>
                            </Anchor>
                        </div>
                        <div className='flex justify-between pt-3 mt-3 border-t border-[#0000002a]'>
                            <a href={"https://" + eachData?.enlace} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer'>
                                <p className='text-xs mr-3 font-bold'>Ir al sitio</p>
                                <img className='h-3' src={arrow} alt="Ir al sitio" />
                            </a>
                            <a href={eachData?.github} target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer'>
                                <p className='text-xs mr-3 font-bold'>Repo Github</p>
                                <img className='h-4' src={gitIcon} alt="Ir al github" />
                            </a>
                        </div>
                    </div>
                </div>
            )) :
                <div className='flex flex-wrap gap-2 w-fit'>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                </div>
            }
        </>

    )
}

export default Cards