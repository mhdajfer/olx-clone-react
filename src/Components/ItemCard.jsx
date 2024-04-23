/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiHeart } from "react-icons/fi";
function ItemCard({ car }) {
  return (
    <>
      <div className="border rounded-md border-gray-300 h-72 mx-1 p-2 cursor-pointer">
        <div className="relative h-44 flex items-center justify-center">
          <div className="absolute top-5 right-4 bg-white p-2 rounded-full hover:text-red-500">
            <FiHeart />
          </div>
          <img src={car?.img} alt="img" className="w-56" />
        </div>
        <div>
          <h1 className="font-semibold text-xl mt-2 border-t border-black">
            ₹{car?.price}
          </h1>
          <h3 className="text-gray-500">{car?.name}</h3>
          <h3 className="text-gray-500">
            {car?.year} - {car?.place}
          </h3>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
