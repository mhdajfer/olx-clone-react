import { useContext } from "react";
import ItemCard from "./ItemCard";
import { CarContext } from "../Context/DataContextProvider";

// eslint-disable-next-line react/prop-types, no-unused-vars
function RowComponent({ title }) {
  const carData = useContext(CarContext);

  return (
    <>
      <h1 className="mt-6 font-semibold text-xl">{title}</h1>
      <div className=" h-fit flex mt-4">
        {carData.map((car, i) => (
          <div key={i}>
            <ItemCard car={car} />
          </div>
        ))}
      </div>
    </>
  );
}

export default RowComponent;
