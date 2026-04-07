import React, { useStaten, useRef } from 'react';
import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio.svg'
import { Link as Anchor } from 'react-router-dom'
import MyLoader from './skeletons/LoaderSkeletonCard';
import gitIcon from '../../public/Images/diseño-grafico/iconos/github2.svg'

function Cards(props) {

    let { datos } = props
    const pages = datos || []

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

                <Anchor to={`/detalles/${eachData?.pagina}`} onClick={() => { parriba() }} key={index} className='flex bg-white flex-col justify-between group/card border-[1px]  hover:z-10 rounded-[1vh] hover:shadow-[-10px_10px_0_rgba(0,0,0,0.1)] duration-75 hover:translate-x-[10px] hover:-translate-y-[10px]'>
                    <div className='h-fit relative cursor-pointer'>
                        <img className='object-contain w-fit rounded-t-[1vh]' src={eachData?.miniatura} alt={eachData?.titulo} />
                    </div>
                    <div className='font-mono flex md:min-h-[10rem] flex-col p-2 md:p-6 justify-between text-black min-h-[8rem]'>
                        <div>
                            <h2 className='font-bold group-hover/card:text-[#0600ff] leading-none mb-2 md:mb-0 text-[3vh]'>{eachData?.titulo}</h2>
                            <div onClick={() => { parriba() }}>
                                <p className='leading-[19px] text-xs font-thin line-clamp-2 text-[#8d8d8d] group-hover/card:text-[#363636]'>{eachData?.descripcion}</p>
                            </div>
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
                </Anchor>

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