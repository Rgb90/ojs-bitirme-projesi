import Img1 from '../../../assets/whey-protein.png';
import Img2 from "../../../assets/fitnespaketi.png";
import Img3 from "../../../assets/günlükvitamin.png";
import Img4 from "../../../assets/pre-workout.png";
import Img5 from "../../../assets/cream.png";
import Img6 from "../../../assets/creatine.png";

export interface LastViewed {
  id: number;
  src: string;
  alt: string;
  sale?: string;
  title: string;
  description: string;
  comment: number;
  price: number;
  oldPrice?: string;
}

const lastViewedData: LastViewed[] = [
  {
    id: 1,
    src: Img1,
    alt: "wyprn",
    title: "WHEY PROTEİN",
    description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    comment: 10869,
    price: 549,
  },
  {
    id: 2,
    src: Img2,
    alt: "fitnesspaketi",
    sale: "%29 İNDİRİM",
    title: "FITNESS PAKETİ",
    description: "EN POPÜLER ÜRÜNLER BİR ARADA",
    comment: 7650,
    price: 799,
    oldPrice: "1126 TL",
  },
  {
    id: 3,
    src: Img3,
    alt: "gnlkvitmn",
    sale: "%23 İNDİRİM",
    title: "GÜNLÜK VİTAMİN PAKETİ",
    description: "EN SIK TÜKETİLEN TAKVİYELER",
    comment: 5013,
    price: 549,
    oldPrice: "717 TL",
  },
  {
    id: 4,
    src: Img4,
    alt: "preworkout",
    title: "PRE-WORKOUT SUPREME",
    description: "ANTRENMAN ÖNCESİ TAKVİYESİ",
    comment: 6738,
    price: 399,
  },
  {
    id: 5,
    src: Img5,
    alt: "creaamofrice",
    title: "CREAM OF RICE",
    description: "EN LEZZETLİ PİRİNÇ KREMASI",
    comment: 5216,
    price: 239,
  },
  {
    id: 6,
    src: Img6,
    alt: "creatine",
    title: "CREATİNE",
    description: "EN POPÜLER SPORCU TAKVİYESİ",
    comment: 8558,
    price: 239,
  },
];

const LastViewedProducts = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-12">SON GÖRÜNTÜLENEN ÜRÜNLER</h2>
      {/* Grid yapısı */}
      <div className="max-w-6xl sm:max-w-screen mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4 sm:p-6 mb-10">
        {lastViewedData.map((lastViewed: LastViewed) => (
          <div key={lastViewed.id} className="flex flex-col justify-between h-full p-4 bg-white">
            {/* Üst Kısım */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img src={lastViewed.src} alt={lastViewed.alt} className="object-cover mb-2 w-28 sm:w-36 md:w-40 lg:w-full" />
                {lastViewed.sale && (  // sale varsa göster
                  <span className="bg-red-500 text-white w-auto flex flex-col justify-center items-center absolute -top-2 -right-2">
                    <span className="text-lg">{lastViewed.sale.split(' ')[0]}</span> {/* %29 kısmı kalın */}
                    <span className="ml-1 text-xs">{lastViewed.sale.split(' ')[1]}</span> {/* İNDİRİM kısmı normal */}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-center mb-1">{lastViewed.title}</h3>
              <p className="text-xs text-gray-500 text-center mb-1">{lastViewed.description}</p>
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
              <p className="text-xs">{lastViewed.comment} Yorum</p>
              <div className="flex items-center justify-center">
                <h3 className="text-xl mr-2">{lastViewed.price} TL</h3>
                {lastViewed.oldPrice && (
                  <p className="text-xs text-red-900 font-semibold line-through">{lastViewed.oldPrice}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LastViewedProducts;
