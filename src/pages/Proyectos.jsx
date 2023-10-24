import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import Cards from '../components/Cards'

function Proyectos() {

    let [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(apiUrl + "pages");
                setData(res)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const datos = data

    console.log(datos)

    /*  <Card imag={imag1} descripcion={amazingDes} titulo={amazingEvents} enlace={enlAmazingDes} />
     <Card imag={imag2} descripcion={huellaDes} titulo={petshop} enlace={enlHuellaDes} />
     <Card imag={imag3} descripcion={mingaDes} titulo={minga} enlace={enlMingaDes} />
     <Card imag={imag4} descripcion={homeDes} titulo={home} enlace={enlHomeDes} /> */

    return (
        <div className='lg:min-h-screen pt-20 pb-5 lg:h-[68vw] text-mono flex flex-col lg:flex-row lg:items-center w-full px-5 lg:px-14'>
            <div id='proyectos' className='lg:w-[35%] mb-10 lg:py-32 h-full'>
                <h2 className='w-full text-2xl lg:text-3xl font-bold mb-2'>Proyectos<span className='animate-pulse-slow'>_</span></h2>
                <p className='text-xs md:text-sm lg:text-sm pt-2 lg:w-[96%] font-[400]'>Proyectos donde se aplicaron las principales tecnologias del desarrollo web complementando conocimientos con diseño y las ultimas tecnologias</p>
            </div>
            <div className='flex w-full items-start mt-6'>
                <div className='flex h-fit justify-start flex-wrap gap-y-4 md:gap-6'>
                    <Cards datos={datos?.data} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos