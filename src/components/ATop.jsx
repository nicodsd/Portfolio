import arr from '../../public/Images/diseño-grafico/iconos/FlechaUp.svg';

function ATop() {
    function parriba() {
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth",
        })
    }

    return (
        <div onClick={parriba} className='flex fixed z-40 justify-center items-center right-6 bottom-10 bg-[#ffd500] drop-shadow-md selection:bg-transparent cursor-pointer rounded-2xl w-13.75 h-11.25 animate__animated animate__fadeIn'>
            <img className='z-10 w-5 absolute animate__animated animate__fadeInUp' src={arr?.src} alt='flecha para arriba' />
        </div>
    );
}

export default ATop;
