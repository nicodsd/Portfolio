import React, { useState } from 'react';
import arr from '../../public/Images/diseño-grafico/300ppi/FlechaUp.svg';

function ATop() {

    const [hover, setHover] = useState(false);

    function parriba() {
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
        })
    }

    return (
        <div 
            onMouseEnter={() => {
                setHover(!hover);
            }}
            onMouseLeave={() => {
                setHover(!hover);
            }}
            className='flex fixed z-40 justify-center items-center right-20 bottom-20'
        >
            {hover ? (
                <div onClick={() => {
                    parriba()
                }}>
                    <div className='bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer absolute rounded-[1rem] w-[7vh] h-[5.5vh] flex items-center justify-center'>
                        <img className='z-10 w-5 absolute' src={arr} alt='' />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='absolute rounded-[1rem] w-[7vh] h-[5vh] flex items-center justify-center'>
                        <div className='border-white border-2 bg-[#000000] absolute rounded-[1rem] w-[5vh] h-[1.5vh]'></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ATop;
