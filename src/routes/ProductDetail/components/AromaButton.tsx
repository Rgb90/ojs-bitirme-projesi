import { aromas } from "../types/aromas";

const AromaButton = () => {
  return (

    <>
      <h4 className="text-base font-bold py-4">AROMA:</h4>
      <div className="flex flex-wrap gap-2">
        {aromas.map((aroma, index) => (
          <button
            key={index}
            className="flex items-center justify-between relative bg-gray-200 border-2 border-gray-300 text-black text-xs font-medium px-8 py-2"
          >
            <span className="mr-2">{aroma.name}</span>
            <span
              style={{ backgroundColor: aroma.color }}
              className="absolute right-0 top-0 bottom-0 w-5"
            />
          </button>
        ))}
      </div>
    </>

  )
}

export default AromaButton