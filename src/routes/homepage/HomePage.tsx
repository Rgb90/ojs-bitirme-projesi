import sliderBanner from "../../assets/slider-banner.svg"; // Büyük banner resmi
import menuImg1 from "../../assets/protein.png";
import menuImg2 from "../../assets/vitaminler.png";
import menuImg3 from "../../assets/saglik.png";
import menuImg4 from "../../assets/spor-gidalari.png";
import menuImg5 from "../../assets/gida.png";
import menuImg6 from "../../assets/tüm-ürünler.png";
import figure from "../../assets/figure.png";
import logobeyaz from "../../assets/logo-beyaz.png";
import BestSellProducts from "./components/BestSellProducts";

function HomePage() {
  const menuImgs = [
    { src: menuImg1, text: "Protein" },
    { src: menuImg2, text: "Vita-minler" },
    { src: menuImg3, text: "Sağlık" },
    { src: menuImg4, text: "Spor Gıdaları" },
    { src: menuImg5, text: "Gıda" },
    { src: menuImg6, text: "Tüm Ürünler" },
  ];

  return (
    <>
      <header>
        {/* Büyük banner resmi */}
        <div className="w-full mb-2">
          <img
            src={sliderBanner}
            alt="Slider Banner"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Grid yapısı */}
        <div className="container mx-auto text-white p-6 w-full max-w-[1300px] h-auto mb-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuImgs.map((image, index) => (
              <div key={index} className="relative p-2">
                <img
                  src={image.src}
                  alt={`Small Image ${index + 1}`}
                  className="w-full h-auto rounded-md"
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 lg:right-24 uppercase text-black text-sm md:text-xl lg:text-3xl font-bold">
                  {image.text}
                </div>
                <button
                  className="absolute top-3/4 transform -translate-y-1/2 right-4 lg:right-10 bg-black text-white px-4 py-1 md:px-6 md:py-1 lg:px-12 lg:py-2 rounded-lg font-bold"
                  onClick={() => alert(`Button on Image ${index + 1} clicked`)}
                >
                  İNCELE
                </button>
              </div>
            ))}
          </div>
        </div>
      </header>

    
        <BestSellProducts />
      

      <div className="relative z-10 w-full h-auto figure">
        <img
          src={figure}
          alt="figure"
          className="w-full h-auto object-cover mt-10 md:mt-0"
        />
        <img
          src={logobeyaz}
          alt="logobeyaz"
          className="absolute top-1/3 left-24 w-[132px] h-[30px] md:w-[253px] md:h-[58px] lg:w-[360px] lg:h-[82px] logobeyaz"
        />
      </div>

      <section className="container mx-auto mt-10 w-[1200px] h-[298px]">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold text-gray-700 ml-5">
            GERÇEK MÜŞTERİ YORUMLARI
          </h4>
          <div className="flex items-center gap-2">
            <div className="flex mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-700 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p className="block text-sm antialiased font-medium leading-relaxed text-blue-gray-500 underline">
                198453 Yorum
              </p>
              <div className="flex items-center space-x-2 px-2">
                <button className="text-sm font-semibold text-gray-700">
                  &lt;
                </button>
                <button className="text-sm font-semibold text-gray-700">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-2 border-gray-400" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">12/08/24</p>
            <h5 className="text-sm font-semibold mt-2">Harika Ürün</h5>
            <p className="text-sm mt-1">
              Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı
              teşekkürler.
            </p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">05/08/24</p>
            <h5 className="text-sm font-semibold mt-2">Çok Memnun Kaldım</h5>
            <p className="text-sm mt-1">
              Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı
              teşekkürler.
            </p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">22/06/24</p>
            <h5 className="text-sm font-semibold mt-2">Mükemmel Kalite</h5>
            <p className="text-sm mt-1">
              Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı
              teşekkürler.
            </p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">03/07/24</p>
            <h5 className="text-sm font-semibold mt-2">Fiyat/Performans</h5>
            <p className="text-sm mt-1">
              Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı
              teşekkürler.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white p-6 w-full h-[302px]">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center md:mb-8">
            <div className="flex items-center gap-2 ml-2 lg:ml-16">
              <div className="flex mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium leading-relaxed text-gray-500 underline">
                (140.000+)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-2 gap-4 p-2">
            <div className="flex flex-col md:w-[348px] md:h-[300px] lg:w-[452px] lg:h-[150px] ml-0 lg:ml-14">
              <p className="text-2xl font-medium">
                LABORATUVAR TESTLİ ÜRÜNLER
                <br />
                AYNI GÜN & ÜCRETSİZ KARGO
                <br />
                MEMNUNİYET GARANTİSİ
              </p>
            </div>
            <div className="flex flex-col md:w-[348px] md:h-[300px] lg:w-[452px] lg:h-[150px]">
              <p className="text-lg md:text-base font-light">
                200.000'den fazla ürün yorumumuza dayanarak,
                <br />
                ürünlerimizi seveceğinize eminiz. Eğer herhangi
                <br />
                bir sebeple memnun kalmazsan, bizimle iletişime
                <br />
                geçtiğinde çözüme kavuşturacağız.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;