import AddToBasket from "./AddToBasket";
import truckfast from "./assets/truckfast.png";
import trust from "./assets/trust.png";
import satisfaction from "./assets/satisfaction.png";
import ProductInfoAccordion from "./ProductInfoAccordion";

const MobilAccordion = () => {
  return (
    <div className="lg:hidden">
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
  )
}

export default MobilAccordion