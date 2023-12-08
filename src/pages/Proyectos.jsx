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
    
    return (
        <div className='lg:min-h-screen pt-24 md:pt-0 pb-5 lg:h-[60vw] selection:bg-transparent text-mono flex flex-col md:flex-row md:items-start  w-full px-5 lg:px-14'>
            <div id='proyectos' className='md:w-[40%] lg:w-[35%] mb-10 lg:py-32 h-full'>
                <h2 className='w-full text-2xl lg:text-3xl font-bold mb-2'>Proyectos<span className='animate-pulse-slow'>_</span></h2>
                <p className='text-sm leading-5 pt-2 w-full lg:w-[96%] font-[300]'>Se usaron las principales tecnologías del desarrollo web, complementando mis conocimientos de diseño y las últimas tecnologías.</p>
            </div>
            <div className='flex w-full h-full items-start mt-6'>
                <div className='flex h-fit justify-start items-start flex-wrap lg:gap-y-2 gap-y-[6vw] md:gap-y-[2vw] lg:gap-x-2 gap-[1vw] lg:mt-20'>
                    <Cards datos={datos?.data} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos