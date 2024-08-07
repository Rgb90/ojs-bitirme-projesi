import SmallCard from '../components/SmallCard';
import sliderBanner from "../assets/slider-banner.svg"; // Büyük banner resmi
import menuImg1 from "../assets/protein.png";
import menuImg2 from "../assets/vitaminler.png";
import menuImg3 from "../assets/saglik.png";
import menuImg4 from "../assets/spor-gidalari.png";
import menuImg5 from "../assets/gida.png";
import menuImg6 from "../assets/tüm-ürünler.png";
import cardImg1 from '../assets/whey-protein.png';
import cardImg2 from "../assets/fitnespaketi.png";
import cardImg3 from "../assets/günlükvitamin.png";
import cardImg4 from "../assets/pre-workout.png";
import cardImg5 from "../assets/cream.png";
import cardImg6 from "../assets/creatine.png";
import figure from "../assets/figure.png";
import logobeyaz from "../assets/logo-beyaz.png";

function HomePage() {
  const menuImgs = [
    { src: menuImg1, text: "Protein" },
    { src: menuImg2, text: "Vita-minler" },
    { src: menuImg3, text: "Sağlık" },
    { src: menuImg4, text: "Spor Gıdaları" },
    { src: menuImg5, text: "Gıda" },
    { src: menuImg6, text: "Tüm Ürünler" }
  ];

  const cardData = [
    { src: cardImg1, alt: "wyprn", title: "WHEY PROTEİN", description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ", comment: 10869, price: 555 },
    { src: cardImg2, alt: "fitnesspaketi", title: "FITNESS PAKETİ", description: "EN POPÜLER ÜRÜNLER BİR ARADA", comment: 7650, price: 555 },
    { src: cardImg3, alt: "gnlkvitmn", title: "GÜNLÜK VİTAMİN PAKETİ", description: "EN SIK TÜKETİLEN TAKVİYELER", comment: 5013, price: 555 },
    { src: cardImg4, alt: "preworkout", title: "PRE-WORKOUT SUPREME", description: "ANTRENMAN ÖNCESİ TAKVİYESİ", comment: 6738, price: 555 },
    { src: cardImg5, alt: "creaamofrice", title: "CREAM OF RICE", description: "EN LEZZETLİ PİRİNÇ KREMASI", comment: 5216, price: 555 },
    { src: cardImg6, alt: "creatine", title: "CREATİNE", description: "EN POPÜLER SPORCU TAKVİYESİ", comment: 8558, price: 555 }
  ]

  return (
    <>
      <header className="flex flex-col items-center justify-center">
        {/* Büyük banner resmi */}
        <div className="w-full mb-2">
          <img src={sliderBanner} alt="Slider Banner" className="w-full h-auto object-cover" />
        </div>

        {/* Grid yapısı */}
        <div className="container grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuImgs.map((image, index) => (
            <div key={index} className="relative p-2">
              <img
                src={image.src}
                alt={`Small Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute top-1/3 right-24 h-16 w-16 uppercase text-black text-3xl font-bold">
                {image.text}
              </div>
              <button
                className="absolute top-1/2 right-10 mt-10 bg-black text-white px-12 py-1 rounded-lg font-bold"
                onClick={() => alert(`Button on Image ${index + 1} clicked`)}
              >
                İNCELE
              </button>
            </div>
          ))}
        </div>
      </header>

      <section className="container mx-auto mb-5">
        <h2 className="p-4 text-xl font-semibold text-center mt-4">ÇOK SATANLAR</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {cardData.map((card, index) => (
            <SmallCard
              key={index}
              src={card.src}
              alt={card.alt}
              title={card.title}
              description={card.description}
              comment={card.comment}
              price={card.price}
            />
          ))}
        </div>

      </section>
      
      <div className='relative'>
        <img src={figure} alt="figure" className="w-full h-auto mt-20" />
        <img src={logobeyaz} alt="logobeyaz" className='absolute top-1/3 left-24' />
      </div>

      <section className="container mx-auto mt-10">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold text-gray-700">GERÇEK MÜŞTERİ YORUMLARI</h4>
          <div className="flex items-center gap-2">
            <div className="flex mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-700 cursor-pointer">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
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
        <hr className='mt-2 border-gray-400' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">12/08/24</p>
            <h5 className="text-sm font-semibold mt-2">Harika Ürün</h5>
            <p className="text-sm mt-1">Ürün gayet güzel ama ekşiliği bi
              süreden sonra bayabiliyor insanı
              teşekkürler.</p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">05/08/24</p>
            <h5 className="text-sm font-semibold mt-2">Çok Memnun Kaldım</h5>
            <p className="text-sm mt-1">Ürün gayet güzel ama ekşiliği bi
              süreden sonra bayabiliyor insanı
              teşekkürler.</p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">22/06/24</p>
            <h5 className="text-sm font-semibold mt-2">Mükemmel Kalite</h5>
            <p className="text-sm mt-1">Ürün gayet güzel ama ekşiliği bi
              süreden sonra bayabiliyor insanı
              teşekkürler.</p>
          </div>
          <div className="flex flex-col p-4">
            <p className="text-xs text-gray-500 italic">03/07/24</p>
            <h5 className="text-sm font-semibold mt-2">Fiyat/Performans</h5>
            <p className="text-sm mt-1">Ürün gayet güzel ama ekşiliği bi
              süreden sonra bayabiliyor insanı
              teşekkürler.</p>
          </div>
        </div>
      </section>


    </>
  );
}

export default HomePage;
