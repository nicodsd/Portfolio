import React, { useState } from 'react';
import arr from '../../public/Images/diseño-grafico/iconos/FlechaUp.svg';

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
            className='flex fixed z-40 justify-center items-center right-[80px] bottom-[85px]'
        >
            {hover ? (
                <div onClick={() => {
                    parriba()
                }}>
                    <div className='bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer absolute rounded-[1rem] w-[55px] h-[45px] flex items-center justify-center animate__animated animate__fadeIn'>
                        <img className='z-10 w-5 absolute animate__animated animate__fadeInUp' src={arr} alt='' />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='absolute rounded-[1rem] w-[55px] h-[45px] flex items-center justify-center'>
                        <div className='border-white border-2 animate__animated animate__fadeInUpBig bg-[#000000] absolute rounded-[1rem] w-[45px] h-[12px]'></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ATop;
