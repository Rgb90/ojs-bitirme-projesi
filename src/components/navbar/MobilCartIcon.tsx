import { Link } from 'react-router-dom';
import logo from "../../assets/logo-siyah.png";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuNavbarMobil from "./MenuNavbarMobil";

const MobilCartIcon = () => {
    return (
        <div className='container mx-auto flex items-center justify-between md:hidden lg:hidden py-2 px-4'>

            <MenuNavbarMobil />

            <Link className='flex-shrink-0 mx-auto' to="/">
                <img className="h-8" src={logo} alt="Brand-logo" />
            </Link>
           
            <Link to="/cart" className="flex">
                <PiShoppingCartLight className="text-gray-500 h-6 w-6" />
            </Link>
        </div>
    )
}

export default MobilCartIcon;