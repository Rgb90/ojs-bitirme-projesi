import { PiPackage } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const NavbarInfoWeb = () => {
    return (
        <div className="bg-gray-100 text-gray-800 text-xs py-2 hidden md:hidden lg:block">
            <div className="container mx-auto flex justify-center items-center lg:space-x-24">
                <p className="flex items-center ">
                    <PiPackage className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-bold mr-2">AYNI GÜN KARGO</span>
                    - 16:00’DAN ÖNCEKİ SİPARİŞLERDE
                </p>
                <p className="flex items-center ">
                    <FaRegSmile className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-bold mr-2">ÜCRETSİZ KARGO</span>
                    - 100 TL ÜZERİ SİPARİŞLERDE
                </p>
                <p className="flex items-center ">
                    <AiOutlineSafetyCertificate className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-bold mr-2">GÜVENLİ ALIŞVERİŞ</span>
                    - 1.000.000+ MUTLU MÜŞTERİ
                </p>
            </div>
        </div>
    )
}

export default NavbarInfoWeb;