import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

interface MenuDataProps {
  id: number;
  title: string;
}

interface MenuInfoProps {
  id: number;
  title: string;
}

const MenuDataLinks: MenuDataProps[] = [
  { id: 1, title: "PROTEİN" },
  { id: 2, title: "SPOR GIDALARI" },
  { id: 3, title: "SAĞLIK" },
  { id: 4, title: "GIDA" },
  { id: 5, title: "VİTAMİN" },
  { id: 6, title: "TÜM ÜRÜNLER" },
];

const MenuInfoLinks: MenuInfoProps[] = [
  { id: 1, title: "HESABIM" },
  { id: 2, title: "MÜŞTERİ YORUMLARI" },
  { id: 3, title: "İLETİŞİM" },
];

const MenuNavbarMobil = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md  top-0 left-0 z-50">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute left-8 top-4 cursor-pointer md:hidden"
      >
        <MdMenu className="text-gray-700 text-2xl" />
      </div>
      {/* link items */}
      <div
        className={`md:flex md:items-center md:pb-0 absolute md:static bg-white left-0 w-[90%]  md:w-auto md:pl-0 transition-all duration-500 ease-in ${
          isMenuOpen ? "top-12 fixed" : "top-[-600px]"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-4 border-b border-gray-200 bg-white text-left">
          {MenuDataLinks.map((data, index) => (
            <li className="text-dark font-bold w-full" key={data.id}>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
              >
                {data.title}
                {index !== MenuDataLinks.length - 1 && (
                  <HiChevronRight className="ml-auto text-gray-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col w-full space-y-2 py-4 bg-gray-100 text-left">
          {MenuInfoLinks.map((info) => (
            <li className="w-full font-bold" key={info.id}>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 text-sm w-full"
              >
                {info.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuNavbarMobil;