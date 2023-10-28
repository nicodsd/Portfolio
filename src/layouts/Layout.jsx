import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ATop from '../components/ATop'
import Curriculum from '../components/Curriculum'

function Layout() {
    return (
        <>
            <Curriculum />
            <ATop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout