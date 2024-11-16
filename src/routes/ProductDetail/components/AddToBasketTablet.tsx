import { useState } from 'react';
import { PiShoppingCartLight } from "react-icons/pi";
import { useBasketStore } from "../../../stores/useBasketStore"; // Zustand Store'u import et
import truckfast from "../assets/truckfast.png";
import trust from "../assets/trust.png";
import satisfaction from "../assets/satisfaction.png";

const AddToBasketTablet = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = useBasketStore((state) => state.increase); // cart state'ini al

    return (
        <>
            <p className="text-sm font-semibold flex justify-end text-black">34.31 TL/Servis</p>
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                    <button onClick={decrement} className="px-2 py-2 text-lg font-normal text-black bg-gray-200 -mr-[1px] border border-gray-300 rounded-l-md">-</button>
                    <span className="px-4 py-2 text-lg font-normal bg-white border border-gray-300">{quantity}</span>
                    <button onClick={increment} className="px-2 py-2 text-lg font-normal text-black bg-gray-200 -ml-[1px] border border-gray-300 rounded-r-md">+</button>
                      <h3 className="text-2xl font-bold text-black ml-6">549 TL</h3>
                </div>
                 <button onClick={increase} className="flex items-center px-4 py-2 text-white text-lg font-normal bg-black rounded-md">
                    <PiShoppingCartLight className="mr-2" size={25} />
                    SEPETE EKLE
                </button>
            </div>
               
            <div className="flex items-center justify-start space-x-10 py-4 ">
                <div className="flex items-center justify-center">
                    <img src={truckfast} alt="Aynı Gün Ücretsiz Kargo" className="w-8 h-8 mr-2" />
                    <p className="text-xs flex flex-col items-center">
                        <span>Aynı Gün</span><span> Ücretsiz Kargo</span>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={trust} alt="750.000+ Mutlu Müşteri" className="w-8 h-8 mr-2" />
                    <p className="text-xs flex flex-col items-center">
                        <span>750.000+</span><span>Mutlu Müşteri</span>
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={satisfaction} alt="Memnuniyet Garantisi" className="w-8 h-8 mr-2" />
                    <p className="text-xs flex flex-col items-center">
                        <span>Memnuniyet</span><span>Garantisi</span>
                    </p>
                </div>
            </div>
        </>

    )
}

export default AddToBasketTablet