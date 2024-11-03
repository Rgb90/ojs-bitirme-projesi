import logobeyaz from "../../assets/logo-beyaz.png";
import FooterMobil from "./FooterMobil";

function Footer() {
  return (
    <>
      <div className="phone:block hidden">
        <FooterMobil />
      </div>

      <footer className="hidden md:block bg-black text-white w-full py-6">
        <div className="container mx-auto flex lg-tablet:px-24 tablet:gap-x-40 laptop:gap-x-80">
          {/* Left */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img src={logobeyaz} alt="Logo" width="132" height="30" />
            </div>
            <ul className="text-sm text-gray-500 mb-32">
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
            {/* Copyright */}  
            <div className="text-xs text-gray-500 mb-5">
              Copyright © - Tüm Hakları Saklıdır.
            </div>
          </div>

          {/* Middle */}
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

          {/* Right */}
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
      </footer>
    </>
  );
}

export default Footer;
