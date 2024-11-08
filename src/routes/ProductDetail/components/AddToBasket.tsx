import { useState } from 'react';
import { PiShoppingCartLight } from "react-icons/pi";
import { useBasketStore } from "../../../stores/useBasketStore"; // Zustand Store'u import et

const AddToBasket = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = useBasketStore((state) => state.increase); // cart state'ini al

    return (
        <div className="flex items-center space-x-4">
            <div className="flex items-center">
                <button onClick={decrement} className="px-2 py-2 text-lg font-normal text-black bg-gray-200 -mr-[1px] border border-gray-300 rounded-l-md">-</button>
                <span className="px-4 py-2 text-lg font-normal bg-white border border-gray-300">{quantity}</span>
                <button onClick={increment} className="px-2 py-2 text-lg font-normal text-black bg-gray-200 -ml-[1px] border border-gray-300 rounded-r-md">+</button>
            </div>
            <button onClick={increase} className="flex items-center justify-center px-4 py-2 w-full text-white text-lg font-normal bg-black rounded-md">
                <PiShoppingCartLight className="mr-2" size={25} />
                SEPETE EKLE
            </button>
        </div>
    )
}

export default AddToBasket