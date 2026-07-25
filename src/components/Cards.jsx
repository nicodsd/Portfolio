import React, { useStaten, useRef } from 'react';
import arrow from '../../public/Images/diseño-grafico/iconos/flecha-sitio.svg'
import { Link as Anchor } from 'react-router-dom'
import MyLoader from './skeletons/LoaderSkeletonCard';
import gitIcon from '../../public/Images/diseño-grafico/iconos/github2.svg'
import { motion } from "motion/react"
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
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: "spring", stiffness: 300 }} >
                    <Anchor to={`/detalles/${eachData?.pagina}`} onClick={() => { parriba() }} key={index} className='flex bg-white flex-col justify-between group/card border-[1px] hover:z-10 rounded-[1vh] hover:shadow-[-10px_10px_0_rgba(0,0,0,0.1)] duration-75 hover:translate-x-[10px] hover:-translate-y-[10px]'>
                        <div className='h-fit relative cursor-pointer'>
                            <img className='object-contain w-fit rounded-t-[1vh]' src={eachData?.miniatura} alt={eachData?.titulo} />
                        </div>
                        <div className='font-mono flex md:min-h-[10rem] flex-col p-2 md:p-6 justify-between text-black min-h-[8rem]'>
                            <div>
                                <h2 className='font-bold group-hover/card:text-[#0600ff] leading-none mb-2 md:mb-0 text-[3vh]'>{eachData?.titulo}</h2>
                                <div onClick={() => { parriba() }}>
                                    <p className='leading-[19px] text-xs md:text-sm font-thin line-clamp-2 text-[#8d8d8d] group-hover/card:text-[#363636]'>{eachData?.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </Anchor>
                </motion.div>
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