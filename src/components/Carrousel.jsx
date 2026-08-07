import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = SlickSlider.default;

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
        arrows: false,
    };

    const palabras = ["Diseño Gráfico", "Javascript", "Webs & Apps", "UX/UI", "Wordpress"];

    return (
        <div className="palabra-carousel translate-y-5 w-full">
            <Slider {...settings}>
                {palabras.map((palabra, index) => (
                    <div key={index} className="rounded-3xl border duration-150 p-3 md:p-10 border-[#000000] text-[#000000] bg-[#FFD400] text-center">
                        <p className='palabras_slide md:text-2xl text-mono'>{palabra}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default WordCarousel;
