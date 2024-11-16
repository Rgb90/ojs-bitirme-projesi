import Stars from "../../../components/Stars/Stars";
import { BestSell } from "../types/BestSellData";

function BestSellerItem({ src, alt, title, description, comment, price, oldPrice, sale }: BestSell) {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white">
      {/* Üst Kısım */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={src} alt={alt} className="object-cover mb-2 w-28 sm:w-36 md:w-40 lg:w-full" />
          {sale && (  // sale varsa göster
            <span className="bg-red-500 text-white w-auto flex flex-col justify-center items-center absolute -top-2 -right-2">
              <span className="text-lg">{sale.split(' ')[0]}</span> {/* %29 kısmı kalın */}
              <span className="ml-1 text-xs">{sale.split(' ')[1]}</span> {/* İNDİRİM kısmı normal */}
            </span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-center mb-1">{title}</h3>
        <p className="text-xs text-gray-500 text-center mb-1">{description}</p>
        <Stars />
      </div>
      <div className="flex flex-col mt-2 text-center">
        <p className="text-xs">{comment} Yorum</p>
        <div className="flex items-center justify-center">
          <h3 className="text-xl mr-2">{price} TL</h3>
          <p className="text-xs text-red-900 font-semibold line-through">{oldPrice}</p>
        </div>

      </div>
    </div>
  );
}

export default BestSellerItem;