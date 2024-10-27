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
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-700 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          ))}
        </div>
      </div>

      {/* Alt Kısım */}
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