import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ATop from '../components/ATop'
import Curriculum from '../components/Curriculum'

function Layout() {
    return (
        <>
            <div className='fixed w-full h-[9rem] md:w-[20vh] md:h-[19vh] md:rounded-e-xl rounded-t-full md:right-0 bottom-0 z-30 bg-gradient-to-t from-[#d1d1d1] via-[#a5a5a541] to-transparent opacity-80'></div>
            <Curriculum />
            <ATop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout