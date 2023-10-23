import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ATop from '../components/ATop'

function Layout() {
    return (
        <>              
            <ATop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout