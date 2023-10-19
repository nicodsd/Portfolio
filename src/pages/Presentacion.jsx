import React from 'react'
import Carrousel from '../components/Carrousel'

function Presentacion() {
    return (
        <>
            <div className='h-screen lg:h-[50vw] md:px-14 w-full flex justify-between text-[3.6vw] md:text-[1rem] lg:text-[2rem] items-center'>
                <svg className='h-20 md:h-[12vw] lg:h-[17vw]' width="150" height="200" viewBox="0 0 220 315" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='forma' d="M0.749025 148.53C0.749024 93.3018 45.5206 48.5303 100.749 48.5303L219.48 48.5303L219.48 205.599C219.48 266 170.515 314.965 110.115 314.965V314.965C49.7136 314.965 0.749027 266 0.749026 205.599L0.749025 148.53Z" fill="#0019FF" /><path id='forma' d="M0.749025 87.0551C0.749024 39.3014 39.461 0.589355 87.2147 0.589354L173.68 0.589352L173.68 124.77C173.68 172.524 134.968 211.236 87.2148 211.236V211.236C39.4611 211.236 0.749026 172.524 0.749026 124.77L0.749025 87.0551Z" fill="#FF0080" /></svg>
                <div className='text-center flex font-[600] selection:bg-transparent text-mono'>
                    <p>Desarrollador <span className='text-[#0600ff]'>& </span>Diseñador Grāfico</p>
                </div>
                <svg className='h-16 md:h-[12vw] lg:h-[17vw]' width="200" height="200" viewBox="0 0 293 267" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='forma' d="M81.0684 122.012C81.0684 54.6334 135.69 0.012207 203.068 0.012207H292.313V34.7765C292.313 90.005 247.542 134.776 192.313 134.776H81.0684V122.012Z" fill="#0019FF" /><path id='forma' d="M81.0688 200.612C81.0688 164.252 110.544 134.777 146.904 134.777H192.314C247.542 134.777 292.314 179.548 292.314 234.777V266.447H81.0688V200.612Z" fill="#FFD400" /><path id='forma' d="M0.34375 0.0117188V0.0117188C44.9269 0.0117188 81.0687 36.1535 81.0687 80.7366V134.776H0.34375V0.0117188Z" fill="#FFD400" /><rect id='forma' x="0.34375" y="134.777" width="80.7249" height="131.67" rx="40.3625" fill="#FF0080" /></svg>
            </div>
            <div className='mt-10'>
                <Carrousel />
            </div>
        </>
    )
}

export default Presentacion