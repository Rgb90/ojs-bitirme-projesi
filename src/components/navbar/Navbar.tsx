import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../../assets/logo-siyah.png";
import MobilCartIcon from "./MobilCartIcon";
import MenuNavbarWeb from "./MenuNavbarWeb";
import InfoNavbarWeb from "./InfoNavbarWeb";
import InfoNavbarMobil from "./InfoNavbarMobil";

function Navbar() {
  return (
    <nav>
      <MobilCartIcon />

      {/* input ve buttonlar desktop için */}
      <div className="container mx-auto w-full items-center md:flex hidden p-4 justify-evenly">
        {/* Logo */}
        <Link className="" to="/">
          <img className="" src={logo} alt="Brand-logo" />
        </Link>
        <div className="hidden md:flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 w-full space-x-6 text-sm">
          <div className="flex items-center max-w-screen md:w-4/12">
            <input
              type="search"
              placeholder="Aradığınız ürünü yazınız"
              className="flex-grow h-8 md:h-10 border-2 border-gray-500 border-r-0 rounded-l pl-2 w-full"
            />
            <button
              type="button"
              className="bg-gray-500 h-8 md:h-10 px-4 text-white hover:bg-gray-400 border-l-0 rounded-r"
            >
              ARA
            </button>
          </div>


          <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdownDelay" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>


          <Link to="/cart" className="flex-shrink-0">
            <button className="bg-gray-500 h-8 md:h-10 text-white border rounded flex items-center justify-center hover:bg-gray-400 w-full lg:w-[190px] md:w-[111px]">
              <PiShoppingCartLight className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              SEPET
            </button>
          </Link>
        </div>
      </div>

      {/* search input for mobil */}
      <div className="mb-2">
        <form className="w-[99%] mx-auto block md:hidden ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ARADIĞINIZ ÜRÜNÜ YAZINIZ."
              required
            />
          </div>
        </form>
      </div>


      <MenuNavbarWeb />

      <InfoNavbarWeb />

      <InfoNavbarMobil />
    </nav>
  );
}

export default Navbar;