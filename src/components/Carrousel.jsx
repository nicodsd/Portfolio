import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WordCarousel() {
    const settings = {
        centerMode: true,
        centerPadding: "100px",
        speed: 200,
        infinite: true,
        cssEase: "ease",
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    };

    const palabras = ["Diseño Gráfico", "Javascript", "Webs & Apps", "Nico Barrera", "UX/UI", "Full Stack MERN", "Wordpress"];

    return (
        <div className="palabra-carousel w-full">
            <Slider {...settings}>
                {palabras.map((palabra, index) => (
                    <div key={index} className=" palabra-item border-[1px] hover:opacity-70 duration-150 p-2 md:p-2 border-[#000000] text-[#000000] bg-[#FFD400] text-center">
                        <p className='palabras_slide text-[11px] md:text-lg text-mono'>{palabra}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default WordCarousel;
