import sliderBanner from "../../assets/slider-banner.svg"; // Büyük banner resmi
import figure from "../../assets/figure.png";
import logobeyaz from "../../assets/logo-beyaz.png";
import ProductCategories from "./components/ProductCategories";
import BestSeller from "./components/BestSeller";
import SliderComments from "./components/SliderComments";

function HomePage() {
  return (
    <>
      <header>
        <div className="w-full mb-2">
          <img
            src={sliderBanner}
            alt="Slider Banner"
          />
        </div>
      </header>

      <ProductCategories />

      <BestSeller />

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

      <SliderComments />

      <section className="bg-black text-white p-6 w-full">
        <div className="container mx-auto mb-16 flex flex-col lg-tablet:px-24">
          <div className="flex justify-between items-center md:mb-8">
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
              <p className="text-sm font-medium leading-relaxed text-gray-500 underline">
                (140.000+)
              </p>
            </div>
          </div>

          {/* İçerik bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {/* Sol kısım */}
            <div className="flex flex-col justify-center ">
              <p className="text-2xl font-medium">
                LABORATUVAR TESTLİ ÜRÜNLER
                <br />
                AYNI GÜN & ÜCRETSİZ KARGO
                <br />
                MEMNUNİYET GARANTİSİ
              </p>
            </div>

            {/* Sağ kısım */}
            <div className="flex flex-col justify-center ">
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