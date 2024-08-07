import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCartLight, PiPackage } from "react-icons/pi";
import { FaCaretDown, FaRegSmile } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import logo from "../assets/logo-siyah.png";

function Navigation() {
  return (
    <nav className="">
      {/* Navbar search */}
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <Link to="/"><img src={logo} alt="Brand-logo" /></Link>
        <div className="flex justify-center space-x-24"> {/* justify-center ekledim */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Aradığınız ürünü yazınız"
              className="px-12 py-1 border border-current border-r-0 rounded-l-md"
            />
            <button className="bg-gray-300 px-4 py-1 border border-current border-l-0 rounded-r-md">Ara</button>
          </div>
          <button className="bg-white px-4 py-1 border rounded">
            <Link to="/account" className="px-4 flex items-center hover:underlin">
            <FaRegUser className="mr-2" />
              Hesap <FaCaretDown className="ml-2" />
            </Link>
          </button>
          <button className="bg-gray-300 px-4 py-1 border rounded">
            <Link to="/cart" className="px-4 flex items-center hover:underline">
            <PiShoppingCartLight className="mr-2" />
              Sepet
            </Link>
          </button>
        </div>
      </div>

      {/* Navbar menu */}
      <div className="w-full bg-black text-white py-2">
        <div className="container mx-auto flex justify-center px-4">
          <div className="flex items-center text-base lg:text-sm space-x-6 lg:space-x-40">
            <a href="#" className="hover:underline">PROTEİN</a>
            <a href="#" className="hover:underline">SPOR GIDALARI</a>
            <a href="#" className="hover:underline">SAĞLIK</a>
            <a href="#" className="hover:underline">GIDA</a>
            <a href="#" className="hover:underline">VİTAMİN</a>
            <a href="#" className="hover:underline">TÜM ÜRÜNLER</a>
          </div>
        </div>
      </div>

      {/* Navbar info */}
      <div className="bg-gray-100 text-gray-800 text-xs py-2">
        <div className="container mx-auto flex flex-wrap justify-center items-center space-x-6 lg:space-x-24">
          <p className="flex items-center">
          <PiPackage className="mr-2" />
            <span className="font-bold">AYNI GÜN KARGO</span> - 16:00’DAN ÖNCEKİ SİPARİŞLERDE
          </p>
          <p className="flex items-center">
          <FaRegSmile className="mr-2" />
            <span className="font-bold">ÜCRETSİZ KARGO</span> - 100 TL ÜZERİ SİPARİŞLERDE
          </p>
          <p className="flex items-center">
          <AiOutlineSafetyCertificate className="mr-2" />
            <span className="font-bold">GÜVENLİ ALIŞVERİŞ</span> - 1.000.000+ MUTLU MÜŞTERİ
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
