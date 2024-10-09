import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../assets/logo-siyah.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import MobilCartIcon from './MobilCartIcon';
import NavbarMenu from './NavbarMenu';
import NavbarInfoWeb from './NavbarInfoWeb';
import NavbarInfoMd from './NavbarInfoMd';

function Navigation() {
  return (
    <nav>

      <MobilCartIcon />

      {/* input ve buttonlar desktop için */}
      <div className='container mx-auto flex flex-col md:flex-row items-center p-4 md:flex hidden space-x-4'>
        {/* Logo */}
        <Link className='flex-shrink-0' to="/">
          <img className="h-8 md:h-12" src={logo} alt="Brand-logo" />
        </Link>

        <div className="hidden md:flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 w-full space-x-4">
          <div className="flex items-center w-full max-w-lg lg:w-[400px] md:w-[242px]">
            <input
              type="search"
              placeholder="Aradığınız ürünü yazınız"
              className="flex-grow h-10 md:h-12 border border-gray-500 border-r-0 rounded-l pl-2 w-full"
            />
            <button type="button" className="bg-gray-500 h-10 md:h-12 px-4 text-white hover:bg-gray-400 border-l-0 rounded-r">
              ARA
            </button>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center bg-white h-10 md:h-12 px-4 text-gray-500 border border-gray-500 rounded hover:bg-gray-50 w-full lg:w-[135px] md:w-[115px]">
              <FaRegUser className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              HESAP
              <FaCaretDown aria-hidden="true" className="-mr-2 h-4 w-4 md:h-5 md:w-5" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Çıkış yap
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Üye ol
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Link to="/cart" className="flex-shrink-0">
            <button className="bg-gray-500 h-10 md:h-12 text-white border rounded flex items-center justify-center hover:bg-gray-400 w-full lg:w-[190px] md:w-[111px]">
              <PiShoppingCartLight className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              SEPET
            </button>
          </Link>
        </div>


      </div>

      <NavbarMenu />

      <NavbarInfoWeb />

      <NavbarInfoMd />

    </nav>
  );
};

export default Navigation;
