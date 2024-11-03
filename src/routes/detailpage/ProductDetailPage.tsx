import urunDetay from "../../assets/urunDetay.png"
import Stars from "./components/Stars";
import AromaButton from "./components/AromaButton";
import BoyutButton from "./components/BoyutButton";
import AddToBasket from "./components/AddToBasket";
import truckfast from "./assets/truckfast.png";
import trust from "./assets/trust.png";
import satisfaction from "./assets/satisfaction.png";
import ProductInfoAccordion from "./components/ProductInfoAccordion";
import LastViewedProducts from "./components/LastViewedProducts";
import CommentSection from "./components/CommentSection";

interface ProductDetailProps {
  title: string;
  description: string;
  comment: number;
  imageUrl: string;
}

const ProductDetailPage = () => {
  const productData: ProductDetailProps = {
    title: "WHEY PROTEIN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    imageUrl: urunDetay,
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-4">
      <div className="md:ml-[50px] ">
        <div className="grid md:grid-cols-2 gap-12 ">
          <div>
            <img src={productData.imageUrl} alt={productData.title} />
          </div>

          <div className="md:ml-[25px]">
            <h3 className="text-lg font-bold">{productData.title}</h3>
            <p className="text-gray-600">{productData.description}</p>
            <div className="flex gap-x-2">
              <Stars />
              <p className="text-black">{productData.comment} Yorum</p>
            </div>
            <div className="flex py-[15px] gap-x-2">
              <div className="bg-gray-200 rounded-full px-4 py-2">
                <p className="text-black text-xs">VEJETARYEN</p>
              </div>
              <div className="bg-gray-200 rounded-full px-4 py-2">
                <p className="text-black text-xs">GLUTENSİZ</p>
              </div>
            </div>

            <hr className="border-gray-300" />

            <AromaButton />

            <BoyutButton />

            {/* Fiyat ve servis başına maliyet alanı */}
            <div className="flex justify-between items-center py-2">
              <h3 className="text-2xl font-bold text-black">549 TL</h3>
              <p className="text-sm font-semibold text-black">34.31 TL/Servis</p>
            </div>

            <AddToBasket />

            <div className="grid grid-cols-3 gap-4 py-4">
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

            <ProductInfoAccordion />

          </div>
        </div>
      </div>

      <LastViewedProducts />

      <CommentSection />

    </div>
  );
};

export default ProductDetailPage;
