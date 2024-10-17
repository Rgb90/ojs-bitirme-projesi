import logobeyaz from "../../assets/logo-beyaz.png";
import FooterMobil from "./FooterMobil";

function Footer() {
  return (
    <>
      <div className="">
        <FooterMobil />
      </div>

      {/* Footer sadece orta ve büyük ekranlarda görünecek */}
      <footer className="hidden md:block bg-black text-white">
        <div className="container mx-auto flex justify-between w-[1200px]">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <img src={logobeyaz} alt="Logo" width="132" height="30" />
            </div>
            <ul className="text-sm text-gray-500">
              {[
                "İletişim",
                "Hakkımızda",
                "Sıkça Sorulan Sorular",
                "KVKK",
                "Çalışma İlkelerimiz",
                "Satış Sözleşmesi",
                "Garanti ve İade Koşulları",
                "Gerçek Müşteri Yorumları",
                "Blog",
              ].map((item, index) => (
                <li key={index} className="hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kategoriler</h3>
            <ul className="text-sm text-gray-500">
              {[
                "Protein",
                "Spor Gıdaları",
                "Sağlık",
                "Gıda",
                "Vitamin",
                "Aksesuar",
                "Tüm Ürünler",
                "Paketler",
                "Lansmana Özel Fırsatlar",
              ].map((item, index) => (
                <li key={index} className="hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popüler Ürünler</h3>
            <ul className="text-sm text-gray-500">
              {[
                "Whey Protein",
                "Cream of Rice",
                "Creatine",
                "BCAA+",
                "Pre-Workout",
                "Fitness Paketi",
                "Collagen",
                "Günlük Vitamin Paketi",
                "ZMA",
              ].map((item, index) => (
                <li key={index} className="hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 md:ml-14 lg:ml-48 p-6">
          <p className="text-xs text-gray-500">
            Copyright © - Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
