import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WordCarousel() {
    const settings = {
        centerMode: true,
        centerPadding:"100px",
        speed: 200,
        infinite: true,
        cssEase: "ease",
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4, // Cantidad de elementos a mostrar en fila
        autoplay: true,
        autoplaySpeed: 1500, // Cambia cada 2 segundos (ajusta según tus preferencias)
        arrows: false,
    };

    const palabras = ["Diseño Gráfico", "Desarrollo de Web & Apps", "Nico Barrera", "UX/UI", "Full Stack"];

    return (
        <div className="palabra-carousel w-full drop-shadow-md">
            <Slider {...settings}>
                {palabras.map((palabra, index) => (
                    <div key={index} className="palabra-item border-[1px] p-1 border-[#000000] text-[#000000] bg-[#FFD400] text-center">
                        <p className='palabras_slide text-mono'>{palabra}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default WordCarousel;
