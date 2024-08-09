import logobeyaz from "../assets/logo-beyaz.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between w-[1200px] h-[425px]">
        {/* Left Column */}
        <div className="w-1/3">
          <div className="mb-4">
            <img src={logobeyaz} alt="Logo" width="132" height="30" />
          </div>
          <ul className="text-sm text-gray-500 space-y-2">
            {[
              'İletişim',
              'Hakkımızda',
              'Sıkça Sorulan Sorular',
              'KVKK',
              'Çalışma İlkelerimiz',
              'Satış Sözleşmesi',
              'Garanti ve İade Koşulları',
              'Gerçek Müşteri Yorumları',
              'Blog',
            ].map((item, index) => (
              <li key={index} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column */}
        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Kategoriler</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            {[
              'Protein',
              'Spor Gıdaları',
              'Sağlık',
              'Gıda',
              'Vitamin',
              'Aksesuar',
              'Tüm Ürünler',
              'Paketler',
              'Lansmana Özel Fırsatlar',
            ].map((item, index) => (
              <li key={index} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Popüler Ürünler</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            {[
              'Whey Protein',
              'Cream of Rice',
              'Creatine',
              'BCAA+',
              'Pre-Workout',
              'Fitness Paketi',
              'Collagen',
              'Günlük Vitamin Paketi',
              'ZMA',
            ].map((item, index) => (
              <li key={index} className="hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 md:ml-14 lg:ml-48">
        <p className="text-xs text-gray-500">Copyright © - Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
