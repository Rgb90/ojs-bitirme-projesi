import urunDetay from "../../assets/urunDetay.png";
import Stars from "../../components/Stars/Stars";
import AromaButton from "./components/AromaButton";
import BoyutButton from "./components/BoyutButton";
import AddToBasket from "./components/AddToBasket";
import ProductInfoAccordion from "./components/ProductInfoAccordion";
import LastViewedProducts from "./components/LastViewedProducts";
import CommentSection from "./components/CommentSection";
import "./ProductDetail.css"; 
import AddToBasketTablet from "./components/AddToBasketTablet";
import BestSeller from "../HomePage/components/BestSeller";

interface ProductDetailProps {
  title: string;
  description: string;
  comment: number;
  imageUrl: string;
}

const ProductDetail = () => {
  const productData: ProductDetailProps = {
    title: "WHEY PROTEIN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    imageUrl: urunDetay,
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-2">
      <div className="md:ml-[50px]">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex-row">
            <div className="md:mb-5">
              <img src={productData.imageUrl} alt={productData.title} />
            </div>

            {/* ProductInfoAccordion sadece 720px-1200px arasında görünür */}
            <div className="accordion-720-1200">
              <ProductInfoAccordion />
            </div>
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

            {/* sadece 720px altı ve 1200px üstü ekranlarda görünsün */}
            <div className="accordion-below-720-above-1200">
              <AddToBasket />
            </div>

            {/* ProductInfoAccordion sadece 720px altı ve 1200px üstü ekranlarda görünsün */}
            <div className="accordion-below-720-above-1200">
              <ProductInfoAccordion />
            </div>
          </div>
        </div>
      </div>

      {/* sadece 720px-1200px arasında görünür */}
      <div className="accordion-720-1200">
        <AddToBasketTablet />
      </div>

      <LastViewedProducts />
      <CommentSection />
      <BestSeller />
    </div>
  );
};

export default ProductDetail;