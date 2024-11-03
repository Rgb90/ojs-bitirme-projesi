import { sizes } from "../types/sizes";

const BoyutButton = () => {
  return (

    <div className="mb-4">
      <h4 className="text-base font-bold py-4">BOYUT:</h4>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size, index) => (
          <div key={index} className="relative">
            {size.discount && (
              <div className="absolute -top-4 left-14 bg-red-600 text-white text-xs px-2 py-1">
                {size.discount}
              </div>
            )}
            <button
              className="flex flex-col items-center border-2 border-gray-300 text-black px-8 py-2"
            >
              <span className="font-bold">{size.label}</span>
              <span className="text-xs font-medium">{size.servisSayisi}</span>
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default BoyutButton;