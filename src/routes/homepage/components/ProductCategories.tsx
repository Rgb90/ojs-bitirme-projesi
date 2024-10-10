import { Link } from "react-router-dom";
import menuImg1 from "../../../assets/protein.png";
import menuImg2 from "../../../assets/vitaminler.png";
import menuImg3 from "../../../assets/saglik.png";
import menuImg4 from "../../../assets/spor-gidalari.png";
import menuImg5 from "../../../assets/gida.png";
import menuImg6 from "../../../assets/tüm-ürünler.png";

const ProductCategories = () => {
  const categories = [
    {
        name: "Protein",
        src: menuImg1,
        link: "/protein",
      },
      {
        name: "Vitaminler",
        src: menuImg2,
        link: "/vitaminler",
      },
      {
        name: "Sağlık",
        src: menuImg3,
        link: "/saglik",
      },
    {
      name: "Spor Gıdaları",
      src: menuImg4,
      link: "/spor-gidalari",
    },
    {
        name: "Gıda",
        src: menuImg5,
        link: "/gida",
      },
    {
      name: "Tüm Ürünler",
      src: menuImg6,
      link: "/tum-urunler"
    }
  ];

  return (
    <div className="container mx-auto text-white w-full h-auto mb-4
    max-w-6xl sm:max-w-screen p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <img
              src={category.src}
              alt={category.name}
              className="w-full h-auto rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-bold">{category.name}</h2>
              <Link to={category.link}>
                <button className="mt-4 bg-white text-black py-2 px-4 rounded">
                  Detaylı İncele
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;