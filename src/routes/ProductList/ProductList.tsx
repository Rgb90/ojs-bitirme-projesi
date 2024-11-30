import productListData, { List } from "./types/productlist";
import Stars from "../../components/Stars/Stars";

const ProductList = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-10">PROTEİN</h2>
            <div className="max-w-6xl sm:max-w-screen mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10">
                {productListData.map((product: List) => (
                    <div key={product.id} className="flex flex-col justify-between h-full p-2 bg-white">
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <img src={product.src} alt={product.alt} className="object-cover mb-2 w-28 sm:w-36 md:w-40 lg:w-full" />
                                {product.sale && (
                                    <span className="bg-red-500 text-white w-auto flex flex-col justify-center items-center absolute -top-4 sm:top-0 -right-4 sm:right-0 px-2 py-1">
                                        <span className="text-lg font-bold">{product.sale.split(' ')[0]}</span>
                                        <span className="ml-1 text-xs">{product.sale.split(' ')[1]}</span>
                                    </span>
                                )}
                            </div>
                            <h3 className="text-sm font-semibold text-center mb-1">{product.title}</h3>
                            <p className="text-xs text-gray-500 text-center mb-1">{product.description}</p>

                            <Stars />

                        </div>
                        <div className="flex flex-col mt-2 text-center">
                            <p className="text-xs">{product.comment} Yorum</p>
                            <div className="flex items-center justify-center">
                                <h3 className="text-xl mr-2 font-semibold text-black">{product.price} TL</h3>
                                {product.oldPrice && (
                                    <p className="text-xs text-red-900 font-semibold line-through">{product.oldPrice}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-black mb-12">Toplam 16 ürün görüntüleniyor</p>

            <div className="container mx-auto text-start text-black text-sm mb-10 px-4 xl:px-24">
                <p>Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık</p>
                <a href="#" className="text-blue-600 underline mt-2 inline-block">daha fazla göster</a>
            </div>
        </>
    );
};

export default ProductList;
