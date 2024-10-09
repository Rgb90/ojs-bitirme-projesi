import { useState } from 'react';
import { HiChevronRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

interface MenuDataProps {
    id: number;
    title: string;
}

interface MenuInfoProps {
    id: number;
    title: string;
}

const MenuData: MenuDataProps[] = [
    { id: 1, title: "PROTEİN" },
    { id: 2, title: "SPOR GIDALARI" },
    { id: 3, title: "SAĞLIK" },
    { id: 4, title: "GIDA" },
    { id: 5, title: "VİTAMİN" },
    { id: 6, title: "TÜM ÜRÜNLER" },
];

const MenuInfo: MenuInfoProps[] = [
    { id: 1, title: "HESABIM" },
    { id: 2, title: "MÜŞTERİ YORUMLARI" },
    { id: 3, title: "İLETİŞİM" },
];

const MenuMobil = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative items-center py-2 bg-white">
            {/* Sol Taraf Hamburger Menü */}
            <div className="flex items-center">
                <button
                    onClick={toggleMenu}
                    className="p-2 focus:outline-none"
                    aria-label="Menüyü Aç/Kapat"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Hamburger Menü İçeriği */}
            {isMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md z-10 max-w-lg w-auto">
                    <div className="flex flex-col items-start w-full">
                        {/* İlk Menü Listesi - Beyaz Arka Plan, Kalın Yazı */}
                        <ul className="flex flex-col w-full space-y-2 py-4 border-b border-gray-200 bg-white text-left">
                            {MenuData.map((data, index) => (
                                <li className="text-dark font-bold w-full" key={data.id}>
                                    <Link
                                        to="/"
                                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                                    >
                                        {data.title}
                                        {/* Son eleman dışında ikon göster */}
                                        {index !== MenuData.length - 1 && (
                                            <HiChevronRight className="ml-auto" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* İkinci Menü Listesi - Açık Gri Arka Plan, Daha Küçük Yazı */}
                        <ul className="flex flex-col w-full space-y-2 py-4 bg-gray-100 text-left">
                            {MenuInfo.map((info) => (
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
                </div>
            )}
        </nav>
    );
};

export default MenuMobil;
