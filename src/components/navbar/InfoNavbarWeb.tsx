import { PiPackage } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const InfoNavbarWeb = () => {
    return (
        <div className="bg-gray-100 text-gray-800 text-xs py-2 hidden md:hidden lg:block">
            <div className=" mx-auto flex justify-center items-center md:space-x-16">
                <p className="flex items-center text-xs">
                    <PiPackage className="mr-1 h-4 w-4" />
                    <span className="font-bold text-xs">AYNI GÜN KARGO</span>
                    - 16:00’DAN ÖNCEKİ SİPARİŞLERDE
                </p>
                <p className="flex items-center text-xs">
                    <FaRegSmile className="mr-1 h-4 w-4" />
                    <span className="font-bold text-xs">ÜCRETSİZ KARGO</span>
                    - 100 TL ÜZERİ SİPARİŞLERDE
                </p>
                <p className="flex items-center text-xs">
                    <AiOutlineSafetyCertificate className="mr-1 h-4 w-4" />
                    <span className="font-bold text-xs">GÜVENLİ ALIŞVERİŞ</span>
                    - 1.000.000+ MUTLU MÜŞTERİ
                </p>
            </div>
        </div>
    )
}

export default InfoNavbarWeb;