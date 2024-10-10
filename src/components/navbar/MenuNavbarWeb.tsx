import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const MenuNavbarWeb = () => {

  return (
    <div className="bg-black hidden md:block">
      <div className="container mx-auto max-w-7xl p-2">
        <ul className="flex justify-center items-center space-x-2 sm:space-x-6 md:space-x-10 lg:space-x-36 mx-auto">

          {/* Menüler */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                PROTEİN
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                SPOR GIDALARI
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                SAĞLIK
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                GIDA
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                VİTAMİN
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center items-center">
              <li className="relative text-white inline-flex justify-center text-sm hover:text-gray-500">
                TÜM ÜRÜNLER
              </li>
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-36 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <MenuItem>
                  <Link to="/protein1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 1</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/protein2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Protein 2</Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

        </ul>

      </div>
    </div>
  );
};

export default MenuNavbarWeb;