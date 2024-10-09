import { PiPackage } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const NavbarInfoMd = () => {
    return (
        <div className="bg-gray-100 text-gray-800 text-xs py-2 hidden md:block lg:hidden">
            <div className="container mx-auto flex flex-wrap justify-center items-center space-x-6 lg:space-x-24">
                {/* İlk öğe */}
                <p className="flex items-center justify-center space-x-2">
                    <PiPackage className="h-4 w-4 md:h-5 md:w-5" />
                    <div className="flex flex-col items-center">
                        <span className="font-bold">AYNI GÜN</span>
                        <span className="font-bold">KARGO</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>- 16:00’DAN ÖNCEKİ</span>
                        <span>SİPARİŞLERDE</span>
                    </div>
                </p>
                
                {/* İkinci öğe */}
                <p className="flex items-center justify-center space-x-2">
                    <FaRegSmile className="h-4 w-4 md:h-5 md:w-5" />
                    <div className="flex flex-col items-center">
                        <span className="font-bold">ÜCRETSİZ</span>
                        <span className="font-bold">KARGO</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>- 100 TL ÜZERİ</span>
                        <span>SİPARİŞLERDE</span>
                    </div>
                </p>
                
                {/* Üçüncü öğe */}
                <p className="flex items-center justify-center space-x-2">
                    <AiOutlineSafetyCertificate className="h-4 w-4 md:h-5 md:w-5" />
                    <div className="flex flex-col items-center">
                        <span className="font-bold">GÜVENLİ</span>
                        <span className="font-bold">ALIŞVERİŞ</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>- 1.000.000+ MUTLU</span>
                        <span>MÜŞTERİ</span>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default NavbarInfoMd;
