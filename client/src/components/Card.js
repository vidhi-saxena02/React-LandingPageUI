import { useState } from "react";
import { TiTick } from "react-icons/ti";

function Card({ images, name, price }) {
  const [add, setAdd] = useState(false);

  return (
    <div className="rounded-xl mr-4 ml-4 group relative shadow-card hover:shadow-cardhover hover:scale-110  transition duration-300 ease-in-out card">
      <img src={images} class=" rounded-lg w-80 mb-10  max-w-xs " alt={name} />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4rounded-md">
        <p className="text-white text-md overflow-y-auto prompt px-1">{name}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAdd(!add)}
              className=" px-2 py-1 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold"
            >
              {!add ? "Add to Cart" : <TiTick className="text-xl" />}
            </button>
            <p className="text-white text-xl">€{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
