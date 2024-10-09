import ProductItem from "./ProductItem";
import bestSellData, { BestSell } from "../BestSellData"; // Product tipi import ediliyor

const BestSellProducts = () => {
  return (
    <>
     <h2 className="text-2xl font-bold text-center">ÇOK SATANLAR</h2>
      {/* Grid yapısı */}
      <div className="max-w-6xl sm:max-w-screen mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 sm:p-6 mb-2">
        {bestSellData.map((bestSell: BestSell) => (
          <ProductItem
          key={bestSell.id}
          id={bestSell.id}
          src={bestSell.src}
          alt={bestSell.alt}
          title={bestSell.title}
          description={bestSell.description}
          comment={bestSell.comment}
          price={bestSell.price}
        />
      ))}
    </div>
    </>
  );
};

export default BestSellProducts;