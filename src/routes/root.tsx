import { Outlet } from "react-router-dom";
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';

function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout;