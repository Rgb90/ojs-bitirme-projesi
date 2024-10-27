import { Link } from 'react-router-dom';
import logo from "../../assets/logo-siyah.png";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuNavbarMobil from "./MenuNavbarMobil";
import { useBasketStore } from '../../stores/useBasketStore';

const MobilCartIcon = () => {
    const basket = useBasketStore((state) => state.basket);
    const increase = useBasketStore((state) => state.increase); // cart state'ini al

    return (
        <div className="flex items-center justify-between py-2 px-4 md:hidden lg:hidden">
            <MenuNavbarMobil />

            <Link className="flex-shrink-0 mx-auto" to="/">
                <img className="h-8" src={logo} alt="Brand-logo" />
            </Link>

            <div className="relative">
                <Link to="/cart" className="flex items-center">
                    <PiShoppingCartLight className="text-blue-900 h-6 w-6" />
                    {(basket === 0 || basket > 0) && (
                <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-2 text-xs">
                  {basket}
                </span>
              )}
                </Link>
            </div>
            <button onClick={increase}>artır</button>
        </div>
    );
};

export default MobilCartIcon;
